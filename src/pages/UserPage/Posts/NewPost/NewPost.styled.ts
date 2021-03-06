import styled from '@emotion/styled';

export default styled.div`
   color: #000;
   padding: 20px;
   margin-bottom: 15px;
   background-color: #FCFCFC;
   
   textarea{
        width: 97%;
        border-radius: 5px;
        border: none;
        background-color: #F3F0F0;
    }
    
    .new-post__title{
        textarea{
            height: 15px;
        }
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
    .new-post__content{
        textarea{
            height: 60px;
        }
        margin-bottom: 15px;
    }
    
    .new-post__button-container{
        display: flex;
        justify-content: flex-end;
    }
`;
