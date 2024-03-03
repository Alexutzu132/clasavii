        document.getElementById('text').style.display="block"
        let answer = prompt("Scrie numărul din stânga optiunii pe care vrei să o alegi.\n\n1.Lectii\n2.Mesaje pentru cineva din clasă")
        if (answer==="2"){
               let raspuns=prompt("Scrie numărul din stanga numelui pentru a vedea un mesaj pentru persoana respectivă\n\n1.Alex\n2.Pascanu\n3.Rebeca\n4.Daria\n5.Serban\n6.Alexia\n7.Luca\n8.Mariana\n9.Martian\n10.Ingrid\n11.Doamna Diriginta\n12.Rares\n13.Filimon\n14.Ada\n15.David")
                if (raspuns==="2"){
                     confirm("Să tragi tare anul ăsta,bine?")
      } else if (raspuns==="10"){
                     confirm("22.03")
      } else if (raspuns==="9"){
                      confirm("Iară te-o scăpat mâna,martiane?")
      } else if (raspuns==="7"){
                      confirm("Fortnite 🔛🔝")
      } else if (raspuns==="3"){
                    confirm("Bună Lume 👋")
      } else if (raspuns==="8"){
                     confirm("Vrea Luca să te bulească")
      } else if (raspuns==="12"){
                      confirm("30.06")
      } else if (raspuns==="1"){
                     confirm("Adele ❤❤")
      } else if (raspuns==="4"){
                      confirm("Trage tare la sală,nu ca Pascanu")
      } else if (raspuns==="13"){
                      confirm("Lasă manuala")
      } else if (raspuns==="6"){
                      confirm("Șefa Clasei 😎")
      } else if (raspuns==="5"){
                      confirm("Ceapa mătii")
      } else if (raspuns==="11"){
                     let answer=prompt("Știți că vă iubim?? 💗💓💞💕❤❤")
                     if (answer==="Da"){
                        alert("Pupici 💓💋")
     } else if (answer==="Daa"){
        confirm("Pupici 💓💋")
     } else if (answer==="da"){
        confirm("Pupici 💓💋")
     } else if (answer==="daa"){
        confirm("Pupici 💓💋")
     }
     } else if (raspuns==="14"){
                        confirm("Minți")
                } else if (raspuns==="15"){
                        confirm("The vinnie's boyfriend")
                }
    } else if (answer==="1"){
        let answer1 = prompt("Scrie numărul din stânga optiunii pe care vrei să o alegi.\n\n1.Matematică\n2.Limba Română\n3.Franceză\n4.Educatie Fizică")
        if (answer1==="1"){
            let answer2 = prompt("1.Algebră\n2.Geometrie")
            if (answer2==="2"){
                let answer3 = prompt("1.Teorema lui Thales\n2.Exercitii(Teorema lui Thales)")
                if (answer3==="1"){
                    thales.style.display="block"
                    thales1.style.display="block"
                } else if (answer3==="2"){
                    document.getElementById("exercitii(tt)").style.display="block"
                }
            } else if (answer2==="1"){
                let answer4 = prompt("1.Ecuatii\n2.Ecuatii echivalente\n3.Exercitii(ecuatii)")
                if (answer4==="1"){
                    document.getElementById('ecuatii').style.display="block"
                    document.getElementById('ecuatii1').style.display="block"
                } else if (answer4==="2"){
                    document.getElementById('ecuatii(ech)').style.display="block"
                } else if (answer4==="3"){
                    document.getElementById('exercitii(ecuatii)').style.display="block"
                    document.getElementById('exercitii(ecuatii)1').style.display="block"
                }
            }
        } else if (answer1==="2"){
            let answer5 = prompt("1.Substantivul\n2.Cazurile Substantivului\n3.Locutiunile Substantivale")
          if (answer5==="1"){
            document.getElementById('substantivul').style.display="block"
        } else if (answer5==="2"){
            document.getElementById('cazurile').style.display="block"
            document.getElementById('cazurile2').style.display="block"
        } else if (answer5==="3"){
            document.getElementById('locutiuni').style.display="block"
        }
    } else if (answer1==="3"){
        document.getElementById('franceza').style.display="block"
    } else if (answer1==="4"){
        confirm("Dăm norma ora viitoare.")
    }
}
