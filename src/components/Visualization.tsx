// nie rozmawiamy o tym pliku
import { useEffect, useState } from "react";
import type { VisualozationPoints } from "../utlis/Visualizationpoints";
import "./Visualization.css" 
import { parseDocument } from "htmlparser2";
import { html, load, xml } from "cheerio";
import css from "css";

// function htmltoxml(html: string, stylesheet: string) {


//   const a = load(html, {xmlMode: false})

//   const xml = a.xml();

//   return xml;
// }

// function downloadFile(file) {
//   // Create a link and set the URL using `createObjectURL`
//   const link = document.createElement("a");
//   link.style.display = "none";
//   link.href = URL.createObjectURL(file);
//   link.download = file.name;

//   // It needs to be added to the DOM so it can be clicked
//   document.body.appendChild(link);
//   link.click();

//   // To make this work on Firefox we need to wait
//   // a little while before removing it.
//   setTimeout(() => {
//     URL.revokeObjectURL(link.href);
//     link.parentNode.removeChild(link);
//   }, 0);
// }



export default function Visualization({ visualizationPoints }: { visualizationPoints: VisualozationPoints }) {
  // const [visualizationElement, setVisualizationElement] = useState<HTMLDivElement | null>(null);

  visualizationPoints["P_12"] = "skibidi"

  // useEffect(() => {
    // const visualizationElementS = document.querySelector("#visualization") as HTMLDivElement;
    // setVisualizationElement(() => visualizationElementS)

      function generateXML() {
          return `
            <Deklaracja>
              <Naglowek>
                <KodFormularza kodSystemowy="PCC-3 (6)" kodPodatku="PCC" rodzajZobowiazania="Z" wersjaSchemy="1-0E">PCC-3</KodFormularza>
                <WariantFormularza>6</WariantFormularza>
                <CelZlozenia poz="P_6">${visualizationPoints.P_6}</CelZlozenia>
                <Data poz="P_4">${visualizationPoints.P_4}</Data>
                <KodUrzedu>0271</KodUrzedu>
              </Naglowek>

              <Podmiot1 rola="Podatnik">
                <OsobaFizyczna>
                  ${visualizationPoints.P_1.length === 11 ? "<PESEL>" + visualizationPoints.P_1 + "</PESEL>" : "<NIP>" + visualizationPoints.P_1 + "</NIP>"}
                  <ImiePierwsze>${visualizationPoints.P_9.split(" ")[1]}</ImiePierwsze>
                  <Nazwisko>${visualizationPoints.P_9.split(" ")[0]}</Nazwisko>
                  <DataUrodzenia>${visualizationPoints.P_9.split(" ")[2]}</DataUrodzenia>
                </OsobaFizyczna>
                <AdresZamieszkaniaSiedziby rodzajAdresu="RAD">
                  <AdresPol>
                    <KodKraju>PL</KodKraju>
                    <Wojewodztwo>${visualizationPoints.P_12}</Wojewodztwo>
                    <Powiat>${visualizationPoints.P_13}</Powiat>
                    <Gmina>${visualizationPoints.P_14}</Gmina>
                    <Ulica>${visualizationPoints.P_15}</Ulica>
                    <NrDomu>${visualizationPoints.P_16}</NrDomu>
                    <NrLokalu>${visualizationPoints.P_17}</NrLokalu>
                    <Miejscowosc>${visualizationPoints.P_18}</Miejscowosc>
                    <KodPocztowy>${visualizationPoints.P_19}</KodPocztowy>
                  </AdresPol>
                </AdresZamieszkaniaSiedziby>
              </Podmiot1>

              <PozycjeSzczegolowe>
                <P_7>${visualizationPoints.P_7}</P_7>
                <P_20>${visualizationPoints.P_20}</P_20>
                <P_21>${visualizationPoints.P_21}</P_21>
                <P_22>${visualizationPoints.P_22}</P_22>
                <P_23>${visualizationPoints.P_23}</P_23>
                ${
                  visualizationPoints.P_24 ? 
                  `
                  <P_24>${visualizationPoints.P_24}</P_24>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_25 ? 
                  `
                  <P_25>${visualizationPoints.P_25}</P_25>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_26 ? 
                  `
                  <P_26>${visualizationPoints.P_26}</P_26>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_27 ? 
                  `
                  <P_27>${visualizationPoints.P_27}</P_27>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_28 ? 
                  `
                  <P_28>${visualizationPoints.P_28}</P_28>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_29 ? 
                  `
                  <P_29>${visualizationPoints.P_29}</P_29>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_30 ? 
                  `
                  <P_30>${visualizationPoints.P_30}</P_30>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_31 ? 
                  `
                  <P_31>${visualizationPoints.P_31}</P_31>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_32 ? 
                  `
                  <P_32>${visualizationPoints.P_32}</P_32>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_33 ? 
                  `
                  <P_33>${visualizationPoints.P_33}</P_33>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_34 ? 
                  `
                  <P_34>${visualizationPoints.P_34}</P_34>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_35 ? 
                  `
                  <P_35>${visualizationPoints.P_35}</P_35>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_36 ? 
                  `
                  <P_36>${visualizationPoints.P_36}</P_36>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_37 ? 
                  `
                  <P_37>${visualizationPoints.P_37}</P_37>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_38 ? 
                  `
                  <P_38>${visualizationPoints.P_38}</P_38>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_39 ? 
                  `
                  <P_39>${visualizationPoints.P_39}</P_39>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_40 ? 
                  `
                  <P_40>${visualizationPoints.P_40}</P_40>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_41 ? 
                  `
                  <P_41>${visualizationPoints.P_41}</P_41>
                  ` 
                : ""}
                
                ${
                  visualizationPoints.P_42 ? 
                  `
                  <P_42>${visualizationPoints.P_42}</P_42>
                  ` 
                : ""}
                
                <P_46>${visualizationPoints.P_46}</P_46>
                <P_53>${visualizationPoints.P_46}</P_53>
                <P_62>${visualizationPoints.P_62}</P_62>
              </PozycjeSzczegolowe>
              <Pouczenia>1</Pouczenia>

            </Deklaracja>
          `
      }

      const [dialog, setDialog] = useState<HTMLDialogElement | null>(null)

      useEffect(() => {
        const a = document.querySelector("#pouczenieDialog") as HTMLDialogElement
        setDialog(() => a)
      })

  // }, [])
    return (
      <div>

          <dialog id="pouczenieDialog" className="modal">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">Press ESC key or click the button below to close</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          <button
            onClick={()=> {

              const xml = generateXML()

              const blob = new Blob([xml], { type: "text/plain"})
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'pcc-3-6.xml';

              // const dialog = document.querySelector("#puczenieDialog") as HTMLDialogElement;

              dialog.showModal()

              // const caonVAl = confirm("Za podanie nieprawdy lub zatajenie prawdy i przez to narażenie podatku na uszczuplenie grozi odpowiedzialność przewidziana w Kodeksie karnym skarbowym. W przypadku niezapłacenia w obowiązującym terminie kwoty podatku od czynności cywilnoprawnych z poz. 53 lub wpłacenia jej w niepełnej wysokości, niniejsza deklaracja stanowi podstawę do wystawienia tytułu wykonawczego, zgodnie z przepisami ustawy z dnia 17 czerwca 1966 r. o postępowaniu egzekucyjnym w administracji (Dz. U. z 2023 r. poz. 2505).")

              // if (caonVAl) {
               document.body.appendChild(a)
              a.click()
              document.body.removeChild(a) 
              // }
              


            // const html = visualizationElement.innerHTML;

            //   // console.log(styles)


            //   const xmlOutput = htmltoxml(html, stylesheet);
            //   const blob = new Blob([xmlOutput], { type: 'text/plain' });

            //   downloadFile(blob)

              
              // console.log(xmlOutput)


            }}
          >
            save
          </button>

    <div className="deklaracja" id="visualization">
      <div className="naglowek">
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                <span className="kod-formularza">PCC-3</span>&nbsp;
                <span className="wariant">(6)</span>
              </td>
            </tr>
            <tr>
              <td className="etykieta">Kod systemowy</td>
              <td className="wartosc">PCC-3 (6)</td>
            </tr>
            <tr>
              <td className="etykieta">Kod podatku</td>
              <td className="wartosc">PCC</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="tlo-formularza">
        <h1 className="nazwa">DEKLARACJA W SPRAWIE PODATKU OD CZYNNOŚCI CYWILNOPRAWNYCH</h1>
        <div className="okres"></div>
      </div>
      <div className="prawne">
        <table>
          <tbody>
            <tr>
              <td className="etykieta" style={{ width: '10%' }}>Podstawa prawna:</td>
              <td className="wartosc">
                Art. 10 ust. 1 ustawy z dnia 9 września 2000 r. o podatku od czynności cywilnoprawnych (Dz. U. z 2023 r. poz. 170, 1463 i 1723), zwanej dalej „ustawą”.
              </td>
            </tr>
            <tr>
              <td className="etykieta" valign="top">Składający:</td>
              <td className="wartosc">Podatnicy podatku od czynności cywilnoprawnych.</td>
            </tr>
            <tr>
              <td className="etykieta">Termin składania:</td>
              <td className="wartosc">14 dni od dnia powstania obowiązku podatkowego.</td>
            </tr>
            <tr>
              <td className="etykieta">Miejsce składania:</td>
              <td className="wartosc">
                Urząd skarbowy, przy pomocy którego swoje zadania wykonuje naczelnik urzędu skarbowego, o którym mowa w art. 12 i 13 ustawy.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="tytul-sekcja-blok">A. MIEJSCE I CEL SKŁADANIA DEKLARACJI</h2>
      <table className="normalna">
        <tbody>
          <tr>
            <td className="niewypelnianeopisy" style={{ width: '33%' }}>
              Urząd skarbowy, do którego jest adresowana deklaracja<sup>1)</sup>
            </td>
            <td className="wypelniane" style={{ width: 'auto' }}>
              <div></div>
            </td>
          </tr>
          <tr>
            <td className="niewypelnianeopisy">Cel złożenia deklaracji:</td>
            <td className="wypelniane"></td>
          </tr>
        </tbody>
      </table>
      <h2 className="tytul-sekcja-blok">
        B. DANE PODATNIKA DOKONUJĄCEGO ZAPŁATY LUB ZWOLNIONEGO Z PODATKU NA PODSTAWIE ART. 9 PKT 10 LIT. B USTAWY
      </h2>
      <h3 className="tytul-sekcja-blok">B.1. DANE IDENTYFIKACYJNE</h3>
      <div className="sekcja">
        <table className="normalna">
          <tbody>
            <tr>
              <td className="wypelniane">
                <div className="opisrubryki">7. Podmiot składający deklarację: {visualizationPoints.P_7}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="normalna">
          <tbody>
            <tr>
              <td className="wypelniane">
                <div className="opisrubryki">8. Rodzaj podatnika: {visualizationPoints.P_8} </div>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className="tytul-sekcja-blok">B.2. ADRES SIEDZIBY / AKTUALNY ADRES ZAMIESZKANIA</h3>
        <div className="sekcja">
          <table className="normalna">
            <tbody>
              <tr>
                <td className="wypelniane">
                  <div className="opisrubryki">Kraj {visualizationPoints.P_11}</div>
                  PL&nbsp;
                  <span className="nazwa-dla-kodu">(POLSKA)</span>
                </td>
                <td className="wypelniane" style={{ width: '40%' }}>
                  <div className="opisrubryki">Województwo {visualizationPoints.P_12}</div>
                </td>
                <td className="wypelniane" style={{ width: '40%' }}>
                  <div className="opisrubryki">Powiat {visualizationPoints.P_13}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="normalna">
            <tbody>
              <tr>
                <td className="wypelniane" style={{ width: '35%' }}>
                  <div className="opisrubryki">Gmina {visualizationPoints.P_14}</div>
                </td>
                <td className="wypelniane">
                  <div className="opisrubryki">Ulica {visualizationPoints.P_15}</div>
                </td>
                <td className="wypelniane" style={{ width: '10%' }}>
                  <div className="opisrubryki">Nr domu {visualizationPoints.P_16}</div>
                </td>
                <td className="wypelniane" style={{ width: '10%' }}>
                  <div className="opisrubryki">Nr lokalu {visualizationPoints.P_17}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="normalna">
            <tbody>
              <tr>
                <td className="wypelniane">
                  <div className="opisrubryki">Miejscowość {visualizationPoints.P_18}</div>
                </td>
                <td className="wypelniane">
                  <div className="opisrubryki">Kod pocztowy {visualizationPoints.P_19}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        <h2 className="tytul-sekcja-blok">C. PRZEDMIOT OPODATKOWANIA I TREŚĆ CZYNNOŚCI CYWILNOPRAWNEJ</h2>
      <table className="normalna">
        <tbody>
          <tr>
            <td className="wypelniane">
              <div className="opisrubryki">20. Przedmiot opodatkowania: {visualizationPoints.P_20}</div>
            </td>
          </tr>
          <tr>
            <td className="wypelniane">
              <div className="opisrubryki">21. Miejsce położenia rzeczy lub miejsce wykonywania prawa majątkowego: {visualizationPoints.P_21}</div>
            </td>
          </tr>
          <tr>
            <td className="wypelniane">
              <div className="opisrubryki">22. Miejsce dokonania czynności cywilnoprawnej: {visualizationPoints.P_22}</div>
            </td>
          </tr>
          <tr>
            <td className="wypelniane" style={{ width: '50%' }}>
              <div className="opisrubryki">23. Zwięzłe określenie treści i przedmiotu czynności cywilnoprawnej: {visualizationPoints.P_23}</div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Section D: Calculation of Tax */}
      <h2 className="tytul-sekcja-blok">
        D. OBLICZENIE NALEŻNEGO PODATKU OD CZYNNOŚCI CYWILNOPRAWNYCH, Z WYJĄTKIEM UMOWY SPÓŁKI LUB JEJ ZMIANY
      </h2>
      <table className="normalna">
        <tbody>
          <tr>
            <td className="niewypelniane" style={{ width: '40%' }}>
              Rodzaj czynności cywilnoprawnej <br />
              <small style={{ fontWeight: 'normal' }}>(w tym zmiana umowy, orzeczenie sądu lub ugoda)</small>
            </td>
            <td className="niewypelniane" style={{ width: '25%' }}>
              Podstawa opodatkowania <br />
              <small style={{ fontWeight: 'normal' }}>
                określona zgodnie z art. 6 ustawy <br />
                (po zaokrągleniu do pełnych złotych)
              </small>
            </td>
            <td className="niewypelniane" style={{ width: '10%' }}>
              Stawka podatku <br />
              <small style={{ fontWeight: 'normal' }}>określona zgodnie z art. 7 ustawy</small>
            </td>
            <td className="niewypelniane" style={{ width: '25%' }}>
              Obliczony należny podatek od czynności cywilnoprawnej <br />
              <small style={{ fontWeight: 'normal' }}>(po zaokrągleniu do pełnych złotych)</small>
            </td>
          </tr>
          <tr>
            <td className="niewypelniane" style={{ fontWeight: 'normal' }}>a</td>
            <td className="niewypelniane" style={{ fontWeight: 'normal' }}>b</td>
            <td className="niewypelniane" style={{ fontWeight: 'normal' }}>c</td>
            <td className="niewypelniane" style={{ fontWeight: 'normal' }}>d</td>
          </tr>
          <tr>
            <td className="niewypelnianeopisy" style={{ width: '35%' }} rowSpan={2}>
              Umowa sprzedaży<sup>3)</sup>
            </td>
            <td className="wypelniane" style={{ width: '12%' }}>
              <div className="opisrubryki">24.</div>
              <div className="kwota">{visualizationPoints.P_24} zł</div>
            </td>
            <td className="niewypelnianeopisy" style={{ width: '12%' }}>
              <h1>
                <div >1%</div>
              </h1>
            </td>
            <td className="wypelniane" style={{ width: '12%' }}>
              <div className="opisrubryki">25.</div>
              <div className="kwota">{visualizationPoints.P_25} zł</div>
            </td>
          </tr>
          <tr>
            <td className="wypelniane" style={{ width: '12%' }}>
              <div className="opisrubryki">26.</div>
              <div className="kwota">{visualizationPoints.P_26} zł</div>
            </td>
            <td className="niewypelnianeopisy" style={{ width: '12%' }}>
              <h1>
                <div>2%</div>
              </h1>
            </td>
            <td className="wypelniane" style={{ width: '12%' }}>
              <div className="opisrubryki">27.</div>
              <div className="kwota">{visualizationPoints.P_27} zł</div>
            </td>
          </tr>

        <tr>
          <td className="niewypelnianeopisy" style={{ width: '35%' }}>Umowa zamiany</td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">28.</div>
            <div className="kwota">{visualizationPoints.P_28} zł</div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">29.</div>
            <div className="kwota">{visualizationPoints.P_29}%</div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">30.</div>
            <div className="kwota">{visualizationPoints.P_30} zł</div>
          </td>
        </tr>
        {/* Add the remaining rows in a similar manner */}
        <tr>
          <td className="niewypelnianeopisy" style={{ width: '35%' }}>
            Umowa pożyczki lub depozytu nieprawidłowego, w tym zwolniona na podstawie art. 9 pkt 10 lit. b ustawy<sup>4)</sup>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">31.</div>
            <div className="kwota">{visualizationPoints.P_31} zł</div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">32.</div>
            <div className="kwota">{visualizationPoints.P_32}%</div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">33.</div>
            <div className="kwota">{visualizationPoints.P_33} zł</div>
          </td>
        </tr>
        <tr>
          <td className="niewypelnianeopisy" style={{ width: '35%' }}>Umowa darowizny w części dotyczącej przejęcia przez obdarowanego długów i ciężarów lub zobowiązań darczyńcy</td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">34.</div>
            <div className="kwota">{visualizationPoints.P_34} zł</div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">35.</div>
            <div className="kwota">{visualizationPoints.P_35}%</div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">36.</div>
            <div className="kwota">{visualizationPoints.P_36} zł</div>
          </td>
        </tr>
        <tr>
          <td className="niewypelnianeopisy" style={{ width: '35%' }}>Ustanowienie odpłatnego użytkowania, w tym nieprawidłowego</td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">37.</div>
            <div className="kwota">{visualizationPoints.P_37} zł</div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">38.</div>
            <div className="kwota">{visualizationPoints.P_38}%</div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">39.</div>
            <div className="kwota">{visualizationPoints.P_39} zł</div>
          </td>
        </tr>
        <tr>
          <td className="niewypelnianeopisy" style={{ width: '35%' }} rowSpan={2}>Ustanowienie hipoteki<sup>5)</sup></td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">40.</div>
            <div className="kwota">{visualizationPoints.P_40} zł</div>
          </td>
          <td className="niewypelnianeopisy" style={{ width: '12%' }}>
            <h1>
              <div>0,1%</div>
            </h1>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">41.</div>
            <div className="kwota">{visualizationPoints.P_41} zł</div>
          </td>
        </tr>
        <tr>
          <td className="niewypelnianeopisy" style={{ width: '12%' }}>
            <h1>
              <div>1</div>
            </h1>
          </td>
          <td className="niewypelnianeopisyright" style={{ width: '12%' }}>19 zł</td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">42.</div>
            <div className="kwota">{visualizationPoints.P_42} zł</div>
          </td>
        </tr>
        <tr>
          <td className="wypelniane" style={{ width: '35%' }}>

          <div className="opisrubryki">
              Inna <small style={{ fontWeight: 'normal' }}>(wymienić jaka):</small>
            </div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">43.</div>
            <div className="kwota">{visualizationPoints.P_43} zł</div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">44.</div>
            <div className="kwota">{visualizationPoints.P_44}%</div>
          </td>
          <td className="wypelniane" style={{ width: '12%' }}>
            <div className="opisrubryki">45.</div>
            <div className="kwota">{visualizationPoints.P_45} zł</div>
          </td>
        </tr>
          


        <table className="normalna">
        <tbody><tr>
          <td className="niewypelnianeopisy" style={{width:"74%"}}>Kwota należnego podatku
					<small style={{fontWeight:"normal"}}><br />Suma kwot z kolumny d.
						</small>
          </td>
          <td className="wypelniane" style={{width:"26%"}}>
            <div className="opisrubryki">46.</div>
            <div className="kwota">
						{visualizationPoints.P_46} zł
					</div>
          </td>
        </tr>
      </tbody></table>

          {/* Continue with similar rows and logic */}
        </tbody>
      </table>



      {/* section E */}

      <h2 className="tytul-sekcja-blok">E.&nbsp;OBLICZENIE NALEŻNEGO PODATKU OD UMOWY SPÓŁKI / ZMIANY UMOWY SPÓŁKI</h2>
      <h3 className="tytul-sekcja-blok">E.1. OKREŚLENIE PODSTAWY OPODATKOWANIA</h3>
      <table className="normalna">
        <tbody><tr>
          <td className=" wypelniane">
            <div className="opisrubryki">47. Typ spółki:</div>
            <div className="opisrubryki">{visualizationPoints.P_47}</div>
          </td>
        </tr>
      </tbody></table>

      <table className="normalna">
        <tbody><tr>
          <td className=" wypelniane">
            <div className="opisrubryki">48. Podstawa opodatkowania dotyczy:</div>
            <div className="opisrubryki">{visualizationPoints.P_48}</div>
          </td>
        </tr>
      </tbody></table>
      <table className="normalna">
        <tbody><tr>
          <td className="niewypelnianeopisy" style={{width:"80%"}}>Podstawa opodatkowania - określona zgodnie z art. 6 ust. 1 pkt 8 ustawy
					<small style={{fontWeight:"normal"}}>
							(po zaokrągleniu do pełnych złotych)
					</small>
          </td>
          <td className="wypelniane" style={{width:"20%"}}>
            <div className="opisrubryki">49.</div>
            <div className="kwota">
						{visualizationPoints.P_49} zł
					</div>
          </td>
        </tr>
      </tbody></table>
      <h3 className="tytul-sekcja-blok">E.2. ODLICZENIA OD PODSTAWY OPODATKOWANIA - ART. 6 UST. 9 USTAWY</h3>
      <table className="normalna">
        <tbody><tr>
          <td className="niewypelnianeopisy" style={{width:"80%"}}>Opłaty i koszty związane z zawarciem umowy spółki lub jej zmiany – na podstawie art. 6 ust. 9 ustawy</td>
          <td className="wypelniane" style={{width:"20%"}}>
            <div className="opisrubryki">50.</div>
            <div className="kwota">
						{visualizationPoints.P_50} zł‚   gr
					</div>
          </td>
        </tr>
      </tbody></table>
      <h3 className="tytul-sekcja-blok">E.3. OBLICZENIE NALEŻNEGO PODATKU</h3>
      
      <table className="normalna">
      <tbody>
        <tr>
          <td className="niewypelnianeopisy" style={{ width: '80%' }}>
            Podstawa obliczenia podatku
            <small style={{ fontWeight: 'normal' }}>
              <br />Od kwoty z poz. 49 należy odjąć kwotę z poz. 50. Jeżeli różnica jest liczbą ujemną, należy wpisać 0.
            </small>
          </td>
          <td className="wypelniane" style={{ width: '20%' }}>
            <div className="opisrubryki">51.</div>
            <div className="kwota">
              {visualizationPoints.P_51} zł&nbsp; gr
            </div>
          </td>
        </tr>
        <tr>
          <td className="niewypelnianeopisy" style={{ width: '80%' }}>
            Kwota należnego podatku
            <small style={{ fontWeight: 'normal' }}>
              <br />(po zaokrągleniu do pełnych złotych)
              <br />Podatek obliczony według stawki określonej w art. 7 ust. 1 pkt 9 ustawy od podstawy z poz. 51.
            </small>
          </td>
          <td className="wypelniane" style={{ width: '20%' }}>
            <div className="opisrubryki">52.</div>
            <div className="kwota">
              {visualizationPoints.P_52} zł
            </div>
          </td>
        </tr>
      </tbody>
    </table>


      {/* Section F: Tax to Pay */}
      <h2 className="tytul-sekcja-blok">F. PODATEK DO ZAPŁATY</h2>
      <table className="normalna">
        <tbody>
          <tr>
            <td className="niewypelnianeopisy" style={{ width: '80%' }}>
              Kwota podatku do zapłaty <br />
              <small style={{ fontWeight: 'normal' }}>Należy wpisać kwotę z poz. 46 albo 52.</small>
            </td>
            <td className="wypelniane pogrubiane" style={{ width: '20%' }}>
              <div className="opisrubryki">53.</div>
              <div className="kwota">{visualizationPoints.P_53} zł</div>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="tytul-sekcja-blok">
  G. INFORMACJE DODATKOWE
  <span style={{ textTransform: 'none', fontWeight: 'normal', fontSize: '0.7em' }}>
    <br />
    W przypadku:
    <br />- umowy spółki należy podać adres siedziby spółki (rzeczywistego ośrodka zarządzania),
    <br />- umowy sprzedaży, gdy kupujący nie ma miejsca zamieszkania lub siedziby na terytorium Rzeczypospolitej Polskiej, należy podać miejsce zamieszkania lub siedzibę sprzedawcy, a jeżeli żadna ze stron nie ma miejsca zamieszkania lub siedziby na terytorium Rzeczypospolitej Polskiej, należy podać miejsce dokonania czynności,
    <br />- umowy sprzedaży przedsiębiorstwa albo jego zorganizowanej części należy podać siedzibę przedsiębiorstwa albo miejsce położenia jego zorganizowanej części,
    <br />- orzeczenia sądu, w tym polubownego, oraz ugody, jeżeli przedmiotem jest przeniesienie własności nieruchomości, prawa użytkowania wieczystego lub spółdzielczego własnościowego prawa do lokalu mieszkalnego albo użytkowego, należy podać miejsce położenia nieruchomości.
  </span>
</h2>
<table className="normalna">
  <tbody>
    <tr>
      <td className="wypelniane" style={{ width: '60%' }}>
        <div className="opisrubryki">54. Województwo {visualizationPoints.P_54}</div>
      </td>
      <td className="wypelniane" style={{ width: '40%' }}>
        <div className="opisrubryki">55. Powiat {visualizationPoints.P_55}</div>
      </td>
    </tr>
  </tbody>
</table>
<table className="normalna">
  <tbody>
    <tr>
      <td className="wypelniane" style={{ width: '20%' }}>
        <div className="opisrubryki">56. Gmina {visualizationPoints.P_56}</div>
      </td>
      <td className="wypelniane" style={{ width: '50%' }}>
        <div className="opisrubryki">57. Ulica {visualizationPoints.P_57}</div>
      </td>
      <td className="wypelniane" style={{ width: '15%' }}>
        <div className="opisrubryki">58. Nr domu {visualizationPoints.P_58}</div>
      </td>
      <td className="wypelniane" style={{ width: '15%' }}>
        <div className="opisrubryki">59. Nr lokalu {visualizationPoints.P_59}</div>
      </td>
    </tr>
  </tbody>
</table>
<table className="normalna">
  <tbody>
    <tr>
      <td className="wypelniane" style={{ width: '70%' }}>
        <div className="opisrubryki">60. Miejscowość {visualizationPoints.P_60}</div>
      </td>
      <td className="wypelniane" style={{ width: '30%' }}>
        <div className="opisrubryki">61. Kod pocztowy {visualizationPoints.P_61}</div>
      </td>
    </tr>
  </tbody>
</table>

<h2 className="tytul-sekcja-blok">H. INFORMACJA O ZAŁĄCZNIKACH</h2>
<table className="normalna">
  <tbody>
    <tr>
      <td className="wypelniane" style={{ width: '30%' }}>
        <div className="opisrubryki">62. Liczba dołączonych załączników PCC-3/A {visualizationPoints.P_61}</div>
        <div className="kwota"></div>
      </td>
    </tr>
  </tbody>
</table>

<h2 className="tekst">Objaśnienia</h2>
<h3>
  <small >
    <sup>1)</sup> Przez urząd, do którego adresowana jest deklaracja, rozumie się urząd skarbowy, przy pomocy którego właściwy w sprawie podatku od czynności cywilnoprawnych naczelnik urzędu skarbowego wykonuje swoje zadania.
  </small>
</h3>
<h3>
  <small>
    <sup>2)</sup> Zgodnie z art. 81 ustawy z dnia 29 sierpnia 1997 r. - Ordynacja podatkowa (Dz. U. z 2023 r. poz. 2383).
  </small>
</h3>
<h3>
  <small>
    <sup>3)</sup> W przypadku umowy sprzedaży, w której nie wyodrębniono wartości rzeczy lub praw majątkowych, do których mają zastosowanie różne stawki podatku, w poz. 26 należy wpisać łączną wartość tych rzeczy lub praw majątkowych.
  </small>
</h3>
<h3>
  <small>
    <sup>4)</sup> W przypadku umowy pożyczki zwolnionej na podstawie art. 9 pkt 10 lit. b ustawy, w poz. 31 należy wpisać kwotę udzielonej pożyczki, a w poz. 32 i 33 należy wpisać 0.
  </small>
</h3>
<h3>
  <small>
    <sup>5)</sup> W przypadku ustanowienia hipoteki na zabezpieczenie wierzytelności istniejących, w poz. 40 należy wpisać kwotę zabezpieczonej wierzytelności; w przypadku ustanowienia hipoteki na zabezpieczenie wierzytelności o wysokości nieustalonej, w poz. 42 należy wpisać liczbę 19.
  </small>
</h3>

    </div>
    </div>
  );
};