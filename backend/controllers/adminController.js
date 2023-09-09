import asyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import adminGenToken from "../utils/adminGentoken.js";

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email });

  if (admin && (await admin.matchPassword(password))) {
    adminGenToken(res, admin._id);
    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
    });
  } else {
    res.status(401);
    throw new Error("invalid data");
  }
});

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const admin = await Admin.create({
    name,
    email,
    password,
  });

  if (admin) {
    adminGenToken(res, admin._id);
    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
    });
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});

const logoutAdmin = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: " admin logout" });
});

const listUserProfile = asyncHandler(async (req, res) => {});

const editUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "editUserProfile" });
});

export {
  authAdmin,
  registerAdmin,
  editUserProfile,
  logoutAdmin,
  listUserProfile,
};
