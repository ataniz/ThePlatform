const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me
// @desc Get current users profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    // populate brings in the requested fields from the model
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/profile
// @desc Create or update user profile
// @access Private
router.post(
  '/',
  [auth, [check('username', 'username is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      username,
      status,
      website,
      location,
      education,
      bio,
      interests,
      youtube,
      linkedin,
      github,
      twitter,
      facebook,
      instagram,
    } = req.body;

    // check if username exists
    let userProfile = await Profile.findOne({ username });

    if (userProfile && userProfile.user != req.user.id) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Username already exists' }] });
    }

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (username) profileFields.username = username;
    if (status) profileFields.status = status;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (education) profileFields.education = education;
    if (bio) profileFields.bio = bio;
    if (interests) {
      profileFields.interests = interests
        .split(',')
        .map((interest) => interest.trim());
    }
    // console.log(profileFields.interests);

    // Build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (github) profileFields.social.github = github;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //   Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      //   Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
