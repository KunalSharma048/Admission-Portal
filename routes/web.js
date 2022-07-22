const express = require('express');
const AdminController = require('../Controllers/AdminController');
const CourseController = require('../Controllers/CourseController');
const FrontController = require('../Controllers/FrontController');
const router = express.Router()
const UserController = require('../Controllers/UserController');
const auth = require('../middleware/auth');





router.get('/',UserController.login)
router.get('/signup',UserController.signup)
router.post('/user/insert',UserController.UserInsert)
router.post('/user/login12',UserController.userlogin)
router.get('/dashboard',auth,UserController.dashboard)
router.get('/logout',UserController.logout)


//course route
router.get('/course/btech',auth,CourseController.Btech)
router.post('/course/btechinsert',auth,CourseController.Btechinsert)
router.get('/course/displaybtech',auth,CourseController.displaybtech)
router.get('/course/view/:id',CourseController.Btechview)
router.get('/course/edit/:id',auth,CourseController.Btechedit)
router.post('/course/btechupdate/:id',CourseController.Btechupdate)
router.get('/course/mtech',auth,CourseController.Mtech)
router.get('/course/mba',auth,CourseController.Mba)


//admin login
router.get('/admin_college/dashboard',AdminController.dashboard)
router.get('/course/delete/:id',AdminController.delete)


//front
router.get('/about',auth,FrontController.about)
router.get('/contact',auth,FrontController.contact)
router.post('/contact/insert',FrontController.Contactinsert)
router.get('/gallery',auth,FrontController.gallery)
module.exports = router