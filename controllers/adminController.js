const admins= ("../model/admin.js");
const crypto = require("crypto");
const secretKey ="../config.js"; 
function signup(req, res){
  // Handle registration logic here
  const { username, password, email } = req.body;
  // Generate user_id
  const user_id = Math.floor(Math.random() * 100000).toString();
  const token = crypto.randomBytes(32).toString("hex");
  admins.push({
    userId:user_id,
    userName:username,
    Password:password,
    Email:email,
    webToken:token
  });
  const payload={
    userId: user_id,
    role: 'admin',
  };
  const jwttoken=jwt.sign(payload,token);
  secretKey.push(jwttoken);
  res.json({
    status: "Admin Account successfully created",
    status_code: 200,
    user_id,
  });
};


function login(req, res){
  // Handle login logic here
  const { username, password } = req.body;
  // Assuming successful login
  for(let admin of admins){
    if(username===admin.userName&&password===admin.passsword){
        const user_id=admin.userId;
        const access_token=admin.webToken;
        return res.json({
          status: "Login successful",
          status_code: 200,
          user_id,
          access_token,
        });
    }
  }
  return res.status(401).json({ status: "Incorrect username/password provided. Please retry" });
};

module.exports={
  signup,
  login
}