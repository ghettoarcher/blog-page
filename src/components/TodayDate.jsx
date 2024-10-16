const TodayDate = () =>{
      const date = new Date();
      let day = date.getDate();
      let weekdayName = date.toLocaleString('en-US', { weekday: 'long' });
      let monthName = date.toLocaleString('en-US', { month: 'long' });
      let year = date.getFullYear();
      let currentDate = `${weekdayName}, ${monthName} ${day}, ${year}`;
      
      return(
            <div className="mr-8 text-gray-500 flex-wrap md:flex-nowrap ">{currentDate}</div>
      )
}

export default TodayDate;