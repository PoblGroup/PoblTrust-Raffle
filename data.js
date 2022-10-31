export const FetchNames = async () => {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
    const response = await fetch("https://prod-18.uksouth.logic.azure.com:443/workflows/37921d8a85c14d1da3dfcddbe071d838/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=d9T5BH6zMWe7smUcpXe6hPLSNZKohWfSLY1wSQVP1iI", requestOptions)
    const result = await response.json()
    return result
}