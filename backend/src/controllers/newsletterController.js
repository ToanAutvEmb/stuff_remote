// FUTURE: save email to DB and/or forward to Mailchimp / Klaviyo API
export function subscribe(req, res) {
  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Invalid email address' })
  }

  console.log(`New subscriber: ${email}`)

  // FUTURE:
  // await db.query('INSERT INTO subscribers (email) VALUES ($1)', [email])
  // await mailchimp.lists.addListMember(listId, { email_address: email, status: 'subscribed' })

  res.json({ success: true, message: 'Subscribed successfully' })
}
