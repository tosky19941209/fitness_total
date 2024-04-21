const router = require("express").Router()
const passport = require("passport")
const requireSignin = passport.authenticate("local", { session: false })
const requireAuth = passport.authenticate("jwt", { session: false })
const adminCtrl = require("../controller/admin.controller")


router.get("/test", adminCtrl.test);
router.post("/signup", adminCtrl.signup);
router.post("/signupUpdate", adminCtrl.signupUpdate);
router.get("/signin", adminCtrl.signin);
router.post("/signinWithToken", requireAuth ,adminCtrl.signinWithToken)


module.exports = router



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWY3Yjg4Mjk5MWI4Y2NlNGM1NDYxYSIsInVzZXJuYW1lIjoiamFjayIsInBhc3N3b3JkIjoicXdlciIsImlhdCI6MTcxMzI4OTQ4NywiZXhwIjoxNzEzMzc1ODg3fQ.CodwUavmwMevTTGlz5EzajlDJlUHdYpQl0gj5dGnwXo