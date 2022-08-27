import useCollapse from 'react-collapsed';

function Collapse1() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Ukryj' : 'Dowiedz się więcej'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            <p className='show'> 
                Realizujemy zlecenia od najmniejszych paczek, pojedyńczych palet po ładunki częściówkowe (PTL) przy użyciu pojazdów
                o różnej DMC - 3,5T , 6T oraz 10T wyposażonych w windy załadunkowe.
            </p>
            </div>
        </div>
    </div>
    );
  }

  export default Collapse1;