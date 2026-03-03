import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="scanner">
          <span className="text-5xl">Loading...</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .scanner span {
    color: transparent;
    position: relative;
    overflow: hidden;
  }

  .scanner span::before {
    content: "Loading...";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-right: 4px solid #fff;
    overflow: hidden;
    color: #fff;
    animation: load91371 2s linear infinite;
  }

  @keyframes load91371 {
    0%, 10%, 100% { width: 0; }
    60%, 80% { width: 100%; }
  }
`;;

export default Loader;
