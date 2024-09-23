useEffect(() => {
  const fetchImages = async () => {
    try {
      const response = await fetch('https://rabbit-api.onrender.com/api/main-funds?populate=*', {
        headers: {
          Authorization: `Bearer 93812113f85245dee16a45d5f5c6f023b35ac249bc796c511ba1fc348343f9d07235711df77886de46406ba3f3152e632009efbbb11a89293ccd2d83e5ee14058b0539d4e7cdb45b311025a84fb44de783fd6e36105340ac8032d5482e90c66d157b4de78a48c1af77e550b10dce988a6a68aeb537b1be68ff0e4b2943bed9b5`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('API Response:', data); // Log the full API response to check the structure

      // Filter only the images from the fetched data
      const imageUrls = data.data.map(funder => funder.attributes.image?.data?.attributes?.url);
      setImages(imageUrls.filter(url => url)); // Only keep valid image URLs
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchImages();
}, []);
