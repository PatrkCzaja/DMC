import useCollapse from 'react-collapsed';

function Collapse3() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Ukryj' : 'Dowiedz się więcej'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            <p className='show'> 
                Dzięki współpracy z naszymi partnerami logistycznymi oraz kontraktowymi podwykonawcami na terenie całej Europy
                jesteśmy w stanie zaoferować Państwu transport najmniejszych paczek, pojedyńczych palet oraz ładunków częściówkowych na terenie całej Europy.
            </p>
            </div>
        </div>
    </div>
    );
  }

  export default Collapse3;