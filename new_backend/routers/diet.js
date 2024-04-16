const router = require("express").Router()
const dietCtrl = require("../controller/diet.controller")
const passport = require("passport")
const requireAuth = passport.authenticate("jwt", { session: false })

router.post("/setdiet", requireAuth, dietCtrl.setDietPlan);
router.post("/setdietmenu", requireAuth, dietCtrl.setDietMenu);
router.post("/settargetkcal", requireAuth, dietCtrl.setTargetKcal);
router.get("/getdiet", requireAuth, dietCtrl.getDietPlan);
router.get("/getdietmenu", requireAuth, dietCtrl.getDietMenu);
router.get("/getweeklytotaldata", requireAuth, dietCtrl.getWeeklyTotalData);
router.get("/gettargetkcal", requireAuth, dietCtrl.getTargetKcal);

module.exports = router