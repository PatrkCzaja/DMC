import useCollapse from 'react-collapsed';

function Collapse4() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Ukryj' : 'Dowiedz się więcej'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            <p className='show'> 
            Oferujemy transport ładunków FTL na terenie Europy naczepami typu plandeka oraz chłodniami przeznaczonymi do przewozu towaru wymagającego temperatury kontrolowanej.    
            </p>
            </div>
        </div>
    </div>
    );
  }

  export default Collapse4;