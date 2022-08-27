import useCollapse from 'react-collapsed';

function Collapse2() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Ukryj' : 'Dowiedz się więcej'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            <p className='show'>Zlecenia całopojazdowe na terenie kraju realizujemy przy użyciu naczep typu plandeka, izoterma oraz chłodni przeznaczonych do transportu ładunków wymagających transportu w temperaturze kontrolowanej.</p>
                          
            </div>
        </div>
    </div>
    );
  }

  export default Collapse2;