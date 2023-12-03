import React from 'react'

const Blogs = () => {
  const cardsData = [
    {
      title: "WHY ONLY HATIMI RETREATS? ",
      description:
        "Want to celebrate your season of happiness at a homestay? Hatimi Retreats is your one-stop destination for a privileged community homestay offering multiple benefits to its guests.  ",
      imageUrl: "assets/blog2111.png", // Replace with actual image URL
    },
    {
      title: "HATIMI RETREATS: SNEAK-PEAK OF AUTHENTIC HOSPITALITY ",
      description:
        "Welcome to the Gateway of Serenity, Hatimi Retreats where guests get a true taste of local culture and experience authentic hospitality. ",
      imageUrl: "assets/blog1f.png", // Replace with actual image URL
    },
    {
      title: "Bodrum design forward fund",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/blog2111.png", // Replace with actual image URL
    },
    {
      title: "Let's revolutionise global payments.",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/blog1f.png", // Replace with actual image URL
    },
    {
      title: "Bodrum design forward fund",
      description:
        "Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym ",
      imageUrl: "assets/blog2111.png", // Replace with actual image URL
    },
    // Add more card objects as needed
  ];


  return (

    <div className='container text-white my-5'>
       <div>
        <p className='text-center fs-1 m-0'>News & Articles</p>
        <p className='fs-6 text-center'>#1 Blog on theme marketing by Bodrum</p>
       </div>
      <div className='blogs'>
         <div className='container'>
      <div className="row mt-5  ">
        {cardsData.map((card) => (
          <div key={card.id} className="col-md-4 mb-4 ">
            <div className="blog-card text-white blog-background rounded">
              <img src={card.imageUrl} className="blog-card-img-top" alt={`Card ${card.id}`} />
              <div className="card-body p-3">
                <p className="Blog-title ">{card.title}</p>
                <p className="blog-description">{card.description}</p>
                <div className=' d-flex justify-content-center mt-4'>
                <a href="#" className="btn btn-searchbar">
                  View More
                </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
   
  )
}

export default Blogs