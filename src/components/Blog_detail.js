import React from 'react';

const BlogDetail = () => {
  const data = {
    title: 'WHY ONLY HATIMI RETREATS?',
    image: 'assets/blogdetail1.png',
    descriptions: [
      {
        title: 'Description 1',
        content:
          ['Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis. Donec ultricies, metus vitae bibendum consequat, tortor neque euismod lectus ',
           'Quisque at odio semper, elementum leo sed, congue tellus. Proin nunc mauris, porttitor ut eleifend ut, consectetur ut dolor. In hac habitasse platea dictumst. Pellentesque ornare nulla ut quam blandit scelerisque. Suspendisse non orci id elit tempor rhoncus ac id nunc. Integer scelerisque at turpis sit amet faucibus. Etiam non euismod urna. Suspendisse vel ex justo. Vivamus posuere porttitor ante eu hendrerit.',
          'In lacinia sapien a libero accumsan facilisis. Donec vitae lorem massa. Aliquam tristique vehicula enim ut luctus. Vivamus gravida dignissim ligula, dictum laoreet elit malesuada ac. Praesent est justo, posuere a nisl porta, pharetra posuere lectus. Nulla velit odio, tincidunt vel metus a, viverra placerat ligula. ',
        'Donec id nisl et risus volutpat tempor a eget mauris. Nullam velit eros, porttitor et urna sit amet, ullamcorper vestibulum magna. Quisque consequat arcu eros, lobortis faucibus purus facilisis vitae. Nulla at nunc non purus vehicula elementum.',
        ],
      },
      {
        title: 'Description 2',
        content:
        [  'Big heading for a new topic',
        'Morbi pellentesque finibus libero, in blandit lorem eleifend eget. Praesent egestas hendrerit augue a vestibulum. Nullam fringilla, eros malesuada eleifend placerat, lacus tellus egestas erat, nec varius sem lorem ut mauris. Morbi libero felis.',
        'Cras eget dolor accumsan, blandit risus vitae, faucibus erat. Aliquam scelerisque, diam ut feugiat scelerisque, diam felis venenatis purus, eget cursus enim turpis at sem. Fusce nec tristique dolor, sit amet tristique purus.',
    ],
      },
    ],
  };

  return (
    <div className='my-5 py-5'>
      <div className='container'>
        <div className='row justify-content-center text-white'>            
            <h1 className='text-gold text-center my-4'>{data.title}</h1>
            <img src={data.image} alt='Hatimi Retreats' className='blog-detail-image' />
            <div className='m-5 p-5'>
            {data.descriptions.map((desc, index) => (
            <div key={index} className='col-lg-12 mb-4 d-flex flex-column align-items-center '>     
              <p className='text-start px-5 mx-5 ' >{desc.content.map((sentence,ind)=>{
                return <><p>{sentence}</p><br/></>
              })}</p>
            </div>
          ))}
          </div>
        </div>   
        </div>    
    </div>
  );
};

export default BlogDetail;
