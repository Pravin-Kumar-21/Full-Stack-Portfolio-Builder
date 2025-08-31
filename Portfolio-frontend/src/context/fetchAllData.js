// fetchAllData.js
import axios from 'axios';

export async function fetchAllData(startLoader, stopLoader) {
  try {
    if (startLoader) startLoader();

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

    const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

    const requests = endpoints.map(endpoint =>
      axios.get(`${VITE_API_BASE_URL}api/${endpoint}`)
    );

    const responses = await Promise.all(requests);

    const result = responses.reduce((acc, res, index) => {
      acc[endpoints[index]] = res.data;
      return acc;
    }, {});

    console.log("✅ All data fetched:", result);
    return result;
  } catch (error) {
    console.error("❌ Error fetching all data:", error);
    return null;
  } finally {
    if (stopLoader) stopLoader();
  }
}
