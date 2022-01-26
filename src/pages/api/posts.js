//TODO: EXTREMELY IMPORTANT
// ENVVARS LEAKED CLONE AND REPRODUCE REPO
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "GET") {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Table%201?maxRecords=3&view=Grid%20view`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
      }
    );

    const { records } = await response.json();
    const posts = records.map((record) => {
      return {
        id: record.id,
        ...record.fields,
      };
    });

    res.status(200).json({ posts });
    return;
  }

  // TODO: The post submission isn't effectively mutating in state?
  // Are the posts generating in the AirTable DB
  // What does the network tab provide, additional details?
  if (req.method === "POST") {
    const { authorization } = req.headers;
    const auth = await fetch(`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}/user`, {
      headers: {
        Authorization: authorization,
      },
    });

    const authJson = await auth.json();
    if (!authJson.id) {
      res.status(401).json({
        error: "Invalid token",
      });
      return;
    }

    const { content } = JSON.parse(req.body);
    const data = {
      records: [
        {
          fields: {
            content,
            date: new Date().toISOString(),
          },
        },
      ],
    };

    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Table%201?maxRecords=3&view=Grid%20view`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    res.status(201).json({ response });

    return;
  }
};
