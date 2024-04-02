
const useFetch  = () => { 
  console.log(null)
}

export default useFetch

// import { useState, useEffect, useCallback } from 'react';

// const useFetch = (url: string, method: string) => {
//   //token 있으면 추가
// 	const [data, setData] = useState<Array<object>>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<boolean>(false);

//   const fetchData = useCallback(async (requestData?: object) => {

//     if(!url || url.length === 0) {
//       console.error('has no url');
//       //근데 다른 에러가 생길 수도 있잖아?
//       if(!error) setError(true);
//       //에러가 발생했으니까 로딩 중지
//       if(loading) setLoading(false);
//       return {loading, error}
//     }

//     // if(!token) {
//     //   console.error('has no token');
//     //   if(!error) setError(true);
//     //   if (loading) setLoading(false);
//     //   return {loading, error};
//     // }


//     setLoading(true);
//     const reqeusetMethod = method === 'POST' ? 'POST' : 'GET';
//     let requestHeader = {
//       // 헤더로 전송해야 하는 데이터
//       // headers: {
//       //   Authorization: `Bearer ${JSON.parse(token)}`,
//       //   'Content-Type': 'application/json',
//       // },
//       method: reqeusetMethod,
//       body: requestData ? JSON.stringify(requestData) : undefined
//     };

//     try {
//       const response = await fetch(url, requestHeader);
//       //응답값이 있으면 받는 걸로, 없고 전송만 해야 할 때도 있으니까
//       const reponseData = await response.json();
//       if (!response.ok) {
//         setLoading(false);
//         setError(true);
//         throw new Error('fail to get data because server response is not ok')
//       } 
//       setData(reponseData);
//     } catch (error) {
//       setError(true);
//       console.log('fetchData.ts Error:', error)
//     } finally {
//       setLoading(false);
//     }
//   }, [url, method, error, loading]);

//   const post = useCallback((requestData?: object) => {
//     if(!requestData) {
//       setError(true);
//       return 'faild fetch post because has no request data from client'
//     }

//     fetchData(requestData);
//   },[fetchData])

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

// 	return { data, loading, error, fetch: fetchData, post};
  
// };

// export default useFetch;
