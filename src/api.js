

export async function fetchPavukData({ startDateTime, endDateTime, mediaType, query, skip, limit, token }) {
      const url = new URL('https://dataapi.pavuk.ai/api/v1/data');
      url.searchParams.append('startDateTime', startDateTime);
      url.searchParams.append('endDateTime', endDateTime);
      url.searchParams.append('mediaType', mediaType);
      url.searchParams.append('query', query);
      url.searchParams.append('skip', skip);
      url.searchParams.append('limit', limit);
    
      const options = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
    
      try {
        const response = await fetch(url, options);
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }