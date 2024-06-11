// CampaignList.js

import React, { useEffect, useState } from "react";
import axios from "axios";

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const response = await axios.get("http://localhost:5000/campaigns");
      setCampaigns(response.data);
    };
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Past Campaigns</h2>
      <ul>
        {campaigns.map(campaign => (
          <li key={campaign._id}>
            {campaign.name} - {new Date(campaign.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
