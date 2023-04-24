function findMatching(drivers, hometown) {
    return drivers.filter(driver =>
      driver.toLowerCase() === hometown.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, hometown) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(hometown.toLowerCase())
    );
  }
  
  function matchName(drivers, hometown) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === hometown.toLowerCase()
    );
  }