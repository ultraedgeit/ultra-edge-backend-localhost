// get - for testing purposes
exports.getForm = (req, res) => {
    res.send(`
      <h1>Submit Your Details</h1>
      <form method="POST" action="/form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br/>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br/>
        <button type="submit">Submit</button>
      </form>
    `);
  };
  
// post - when integrated with contact.html in ultraedge website
  exports.submitForm = (req, res) => {
    const { name, email, comments, Subject } = req.body;
    // Here you can add additional business logic, for example, storing the data in a database.
    console.log(`Received: Name - ${name}, Email - ${email} - Comment = ${comments} - Subject: ${Subject}`)
    res.send(`Received: Name - ${name}, Email - ${email} - Comment = ${comments} - Subject: ${Subject}`);
  };
  
