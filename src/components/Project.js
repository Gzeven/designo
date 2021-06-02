import React from 'react';
import styled from 'styled-components';

const Project = ({id,img, alt, title, description}) => {
  return (
        <Wrapper key={id}>
        <div className="image-container">
       <img src={img} alt={alt} />
        </div>
       <div className="project-info">
          <h3>{title}</h3>
           <p>{description}</p>
       </div>
      
        </Wrapper>


    );
};

const Wrapper = styled.main`
cursor: pointer;
transition: var(--transition);
  :hover {
    transform: scale(1.05);
    .project-info { background-color: var(--peach);
      h3, p {
        color: var(--white);
      }
    }
  }
 
 .image-container {
  img {
  max-width: 100%;
  display: block;
  border-radius: var(--radius) var(--radius) 0 0;   
   } 
 }

.project-info {
  background-color: #fdf3f0;
  text-align: center;
  padding: 2rem;
  border-radius: 0 0 var(--radius) var(--radius);
  transition: var(--transition);
    h3 {
      color: var(--peach);
      margin-bottom: 1rem;
      text-transform: uppercase;
      
    }
    p {
      color: var(--dark-grey);
      max-width: 267px;
      margin: 0 auto;
    }
}
   
  @media screen and (min-width: 768px) {
  display: flex;
  .image-container {
     flex-basis: 100%;
     img {
    border-radius: var(--radius) 0 0 var(--radius);
   }
  }
  
   .project-info {
     flex-basis: 100%;
     border-radius: 0 var(--radius) var(--radius) 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        max-width: 265px;
      }
   }


  }
   
    @media (min-width: 1281px) {
      flex-direction: column;
     .image-container {
      img {
    border-radius: var(--radius) var(--radius) 0 0;  
       }
     } 
    .project-info { 
    border-radius: 0 0 var(--radius) var(--radius);
      }
    }
       /*
    flex-direction: column;
    img {
    border-radius: var(--radius) var(--radius) 0 0;  
    
  }

  .project-info { 
    border-radius: 0 0 var(--radius) var(--radius);
   
  }
  } */

`
export default Project;