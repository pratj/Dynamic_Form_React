import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  width:${p => p.isSidebarOpen ? '20%' : '5%'};
  max-width: 280px;
  min-width: 80px;
  background: yellow;
  background-color: #ff4e00;
  background-image: linear-gradient(
      315deg, 
      rgb(255,78,0) 0%, 
      rgb(236,159,5) 74%);
      url(${props=> props.backgroundImage});
  
  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  position: relative;
  transition: .2s ease-in all
`
export const SidebarHeader = styled.h3`
  padding: 20px 0;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 6px;
  
`
export const MenuItemContainer = styled.div``;
//export const ItemContainer = styled.div``;

// Menu items 
export const MenuItem = styled.div`
${p => !p.isSidebarOpen && `
text-align: center;
 
`};

  padding: 6px 20px;
  font-weight: 600;
  color: ${p => p.selected ? 'rgba(255,255,255)':'rgba(19, 15, 64)'};
  &:hover{
      color: rgba(190,190,190);
      transition: .is ease-in all;
  }
  &:after {
      content:'';
      border: 1px solid ${p=>p.selected ? 'white': 'black'};
      display: block;
      margin: 8px 0 4px;
  }
  ${p => !p.selected && `
  &:hover{
      &:after{
          border: 1px solid rgba(255,255,255, 0.2);
          transition: .is ease-in all;
      }
  }`}
`;
export const Text = styled.p`
display: ${p => p.isSidebarOpen ? 'inline' : 'none'};
`;
export const Img = styled.img`
height: 40px;
width: 40px;
padding-right: 20px;
position: absolute;
display: inline
text-align: center;
`
export const Icon = styled.div`
height: 16px;
width: 16px;
padding-right: 20px;
`
export const TogglerContainer=styled.div`
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`
export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    position: relative; // horizontal lines
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: .25em;
      height: .1em;
      width: 100%;
      //background: #fff;
    //   box-shadow: 
    //     0 .75em 0 0 #fff,
    //     0 1.5em 0 0 #fff;        
    }
` 