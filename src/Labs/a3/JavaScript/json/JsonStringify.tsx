function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    
    return (
      <>
        <h4>JSON Stringify</h4>
        squares = {JSON.stringify(squares)} <br/>
      </>
    );
  
}
export default JsonStringify;