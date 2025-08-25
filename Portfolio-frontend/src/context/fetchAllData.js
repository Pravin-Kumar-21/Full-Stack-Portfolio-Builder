import axios from 'axios';

export async function fetchAllData() {
  try {
    const endpoints = [
      "home",
      "about",
      "languages",
      "projects",
      "social",
      "services",
      "work-experience",
      "education-details",
      "project-photos",
    ];

    const requests = endpoints.map(endpoint =>
      axios.get(`http://127.0.0.1:8000/api/${endpoint}/`)
    );

    const responses = await Promise.all(requests);

    const result = responses.reduce((acc, res, index) => {
      acc[endpoints[index]] = res.data;
      return acc;
    }, {});

    console.log("✅ All data fetched:", result);

    // You can store `result` in context or return it
    return result;
  } catch (error) {
    console.error("❌ Error fetching all data:", error);
    return null;
  }
}
