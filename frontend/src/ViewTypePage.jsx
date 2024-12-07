// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   LinearProgress,
//   Divider,
// } from "@mui/material";

// function ViewTypePage({ mbti }) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch MBTI data
//   useEffect(() => {
//     const fetchMBTIData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await fetch(`http://localhost:5001/api/mbti/${mbti}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch MBTI data.");
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMBTIData();
//   }, [mbti]);

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <Typography variant="h6">Loading...</Typography>
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {/* Main Content Section */}
//       <Container maxWidth="lg" sx={{ marginTop: 6 }}>
//         <Grid container spacing={4} alignItems="flex-start">
//           {/* Left Section: Your Type */}
//           <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
//             <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//               Your Type
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: "bold",
//                 marginBottom: 2,
//                 color: "#4F51FD",
//               }}
//             >
//               {data?.title || "Loading..."}
//             </Typography>
//             <img
//               // src={data?.picture || "mainPage/.svg"}
//               src={"mainPage/.svg"}
//               alt="Type Illustration"
//               style={{ maxWidth: "80%", height: "auto", marginBottom: "14px" }}
//             />
//             <Typography
//               variant="body1"
//               sx={{
//                 fontSize: "16px",
//                 color: "text.secondary",
//                 mb: 2,
//               }}
//             >
//               {data?.description || "Loading..."}
//             </Typography>
//           </Grid>

//           {/* Right Section: Your Traits */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//               Your Traits
//             </Typography>
//             <Divider sx={{ marginBottom: 17 }} />
//             {/* Traits List */}
//             {["Leadership", "Creativity", "Ambition", "Independence"].map((trait, index) => (
//               <Box key={index} sx={{ marginBottom: 4 }}>
//                 <Grid container spacing={2} alignItems="center">
//                   <Grid item xs={4}>
//                     <Typography variant="body1">{trait}</Typography>
//                   </Grid>
//                   <Grid item xs={4}>
//                     <LinearProgress
//                       variant="determinate"
//                       value={(index + 1) * 25} // Example: Dynamic trait values
//                       sx={{
//                         height: 8,
//                         borderRadius: 5,
//                         [`& .MuiLinearProgress-bar`]: {
//                           backgroundColor: ["#4F51FD", "#FFC107", "#4CAF50", "#9C27B0"][index],
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={4}>
//                     <Typography variant="body1" sx={{ textAlign: "right" }}>
//                       {`${(index + 1) * 25}%`} {/* Example progress */}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Box>
//             ))}
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default ViewTypePage;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  LinearProgress,
  Divider,
  Paper,
} from "@mui/material";

function ViewTypePage() {
  const location = useLocation(); // Access the passed state from navigation
  const navigate = useNavigate();
  const data = location.state; // Extract MBTI result data

  // Redirect to the homepage if no data is provided
  if (!data) {
    navigate("/");
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: 6 }}>
      {/* Main Content Section */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Section: Your Type */}
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Your Type
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                color: "#4F51FD",
              }}
            >
              {data.title || "Your MBTI Type"}
            </Typography>
            <img
              src={`http://localhost:5001/${data.picture}` || "images/default.png"} 
              alt={`${data.type} illustration`}
              style={{ maxWidth: "80%", height: "auto", marginBottom: "14px" }}
            />
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                color: "text.secondary",
                marginBottom: 4,
              }}
            >
              {data.description ||
                "Your MBTI description will provide insights into your traits and decision-making style."}
            </Typography>
          </Grid>

          {/* Right Section: Your Traits */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Your Traits
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            {/* Display trait scores */}
            {Object.entries(data.scores || {}).map(([trait, value], index) => (
              <Box key={trait} sx={{ marginBottom: 4 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={4}>
                    <Typography variant="body1">{trait}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <LinearProgress
                      variant="determinate"
                      value={(value / 3) * 100} // Assuming max score is 3
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        [`& .MuiLinearProgress-bar`]: {
                          backgroundColor: ["#4F51FD", "#FFC107", "#4CAF50", "#FF5722"][index % 4],
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="body1" sx={{ textAlign: "right" }}>
                      {`${((value / 3) * 100).toFixed(0)}%`}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ViewTypePage;
