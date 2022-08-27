import useCollapse from 'react-collapsed';

function Collapse5() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Ukryj' : 'Dowiedz się więcej'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            <p className='show'> 
            Szybki transport "door-door" małymi autami dostawczymi.
            </p>
            </div>
        </div>
    </div>
    );
  }

  export default Collapse5;