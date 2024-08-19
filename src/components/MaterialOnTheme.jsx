const MaterialOnTheme = ({img,title,subtitle,views,comments}) =>{
      return(
            
      <div className="flex flex-col max-w-64 ml-14">
            <h3 className="text-xl font-bold pb-5">Material on Theme</h3>
            <img src={img} alt="giraffe" />
            <div className="font-bold text-base pt-4">{title}</div>
            <div className="text-sm pt-2">{subtitle}</div>
            <div className="flex flex-row gap-2 pt-5">
                  <div className="flex flex-row text-xs gap-1"><img src="/src/assets/icons/views.svg" alt="views" />{views}</div>
                  <div className="flex flex-row text-xs gap-1"><img src="/src/assets/icons/Comment.svg" alt="comments" />{comments}</div>
            </div>
      </div>
      )
}

export default MaterialOnTheme;