const FooterColumn = ({title,links = []}) => {
      return(
            <div className="flex flex-col ">
            <div className="font-bold mb-6 ">{title}</div>
            {links.map((link,index) => (
                  <a href="#" key={index} className="pb-4 last:pb-0">{link}</a>
            ))}
        </div>
      )
}

export default FooterColumn