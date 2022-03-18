const { google } = require("googleapis");

export default async (req, res) => {
  const client_email = process.env.NEXT_PUBLIC_CLIENT_EMAIL;
  const private_key = process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(
    /\\n/gm,
    "\n"
  );
  const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

  if (req.method === "POST") {
    const { email } = req.body;

    const client = new google.auth.JWT(client_email, null, private_key, [
      "https://www.googleapis.com/auth/spreadsheets",
    ]);
    const googleSheet = google.sheets({ version: "v4", auth: client });

    const response = await googleSheet.spreadsheets.values.append({
      auth: client,
      spreadsheetId,
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[email]],
      },
    });

    if (response.status === 200) {
      res.status(200).json({ response });
    } else {
      res.status(400).json({ message: response });
    }
  }
};
