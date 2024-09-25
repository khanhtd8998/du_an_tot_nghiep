const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Registration
exports.register = async (req, res) => {
  const { username, email, phoneNumber, password, confirmPassword } = req.body;

  // Basic Validation
  if (!username || !email || !phoneNumber || !password || !confirmPassword) {
    return res.status(400).json({ msg: 'Vui lòng nhập đầy đủ thông tin' });
  }

  // Username Length Validation
  if (username.length < 6) {
    console.log('Username quá ngắn:', username.length); 
    return res.status(400).json({ msg: 'Username phải > 6 ký tự' });
  }

  // Email Format Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('Invalid email format:', email); 
    return res.status(400).json({ msg: 'Email không đúng định dạng' });
  }

  // Password Length Validation
  if (password.length < 6) {
    console.log('Password quá ngắn:', password.length); 
    return res.status(400).json({ msg: 'Password phải > 6 ký tự' });
  }

  // Password Match Validation
  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Passwords không khớp' });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'Tài khoản đã tồn tại' });
    }

    // Create a new user
    user = new User({
      username,
      email,
      phoneNumber,
      password
    });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    console.log('Hashed password:', user.password);

    await user.save();
    console.log('User saved:', user); 

    // Return JSON Web Token and user information
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        console.log('Generated JWT token:', token); 
        res.json({ token, user });
      }
    );
  } catch (err) {
    console.error('Registration error:', err.message);
    res.status(500).send('Server error');
  }
};


// User Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ email });
    console.log('User found:', user); 
    if (!user) {
      return res.status(400).json({ msg: 'Thông tin đăng nhập không chính xác!' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch); 

    if (!isMatch) {
      return res.status(400).json({ msg: 'Thông tin đăng nhập không chính xác!' });
    }

    // Generate a JSON Web Token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }, // Token expires in 1 hour
      (err, token) => {
        if (err) {
          console.error('JWT Error:', err); 
          throw err;
        }
        console.log('Generated JWT token:', token);
        
        // Return all user information (excluding password)
        const { password, ...userWithoutPassword } = user._doc; 
        res.json({ token, user: userWithoutPassword }); 
      }
    );
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).send('Server error');
  }
};
