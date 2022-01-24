// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req, res) => {
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
};
