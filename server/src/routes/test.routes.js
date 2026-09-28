const express = require('express')
const supabase = require('../config/supabase')

const router = express.Router()

router.get('/supabase', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('id')
      .limit(1)

    if (error) {
      console.error(error)

      return res.status(500).json({
        success: false,
        message: 'Supabase connection failed',
        error: error.message,
      })
    }

    return res.json({
      success: true,
      message: 'Supabase connection successful',
      data,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      success: false,
      message: 'Unexpected server error',
    })
  }
})

module.exports = router