


      //esta funcion recorre mediante un loop for in las keys de la lista
      // chequeamos que la key actual sea consecutiva con su key anterior y lo añadimos al array consecutiveKeys
      // en caso de que no sean consecutivas, llamamos a la function processConsecutiveKeys para procesar las keys 
      //luego del loop, se llama de vuelta a la funcion para procesar las keys remanentes
      function countCrystalzoom(dictionary) {
        let consecutiveKeys = [];
        let previousKey = null;

        for (const key in dictionary) {
          if (previousKey !== null && parseInt(key) === parseInt(previousKey) + 1) {
            consecutiveKeys.push(key);
          } else {
            processConsecutiveKeys(dictionary, consecutiveKeys);
            consecutiveKeys = [key];
          }
          previousKey = key;
        }

        processConsecutiveKeys(dictionary, consecutiveKeys);
        return dictionary;
      }


      //esta function toma la lista y un array de keys consecutivas para actualizar el contador de palabras "crystalzoom" y las remueve de las keys consecutivas
      //si se encuentra la palabra "crystalZoom" se incrementa el contador
      // si la key encontrada no es la primera, se remueve "crystalzoom" de la lista
      // ademas, si la lista queda vacia, se elimina

      //luego, se comprueba si la key actual es la ultima key del array consecutiveKeys y se encontraron ocurrencias de "crystalzoom"
      //y se actualiza la ocurrencia de crystalzoom para incluirlo en el contador
      function processConsecutiveKeys(dictionary, consecutiveKeys) {
        let crystalzoomCount = 0;
        let firstKeyWithCrystalzoom = null;

        consecutiveKeys.forEach((key, index) => {
          let list = dictionary[key];

          if (crystalzoomIndex !== -1) {
            crystalzoomCount++;
            if (firstKeyWithCrystalzoom === null) {
              firstKeyWithCrystalzoom = key;
            } else {
              list.splice(crystalzoomIndex, 1);
              if (list.length === 0) {
                delete dictionary[key];
              }
            }
          }

          if (index === consecutiveKeys.length - 1 && crystalzoomCount > 0) {
            dictionary[firstKeyWithCrystalzoom][dictionary[firstKeyWithCrystalzoom].indexOf("crystalzoom")] = `crystalzoom${crystalzoomCount}`;
          }
        });
      }

      // Example usage:
      const input = {
        "1": ["windows", "server"],
        "2": ["crystalzoom"],
        "3": ["python", "crystalzoom", "linux"],
        "4": ["crystalzoom"],
        "7": ["java", "crystalzoom", "cpp", "js"],
        "9": ["crystalzoom"],
        "10": ["ruby", "rails"]
      };

      const output = countCrystalzoom(input);
      console.log(output);