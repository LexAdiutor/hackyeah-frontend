// nie rozmawiamy o tym pliku
import "./Visualization.css" 


export default function Visualization() {
    return (
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
                <div className="opisrubryki">7. Podmiot składający deklarację:</div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="normalna">
          <tbody>
            <tr>
              <td className="wypelniane">
                <div className="opisrubryki">8. Rodzaj podatnika:</div>
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
                  <div className="opisrubryki">Kraj</div>
                  PL&nbsp;
                  <span className="nazwa-dla-kodu">(POLSKA)</span>
                </td>
                <td className="wypelniane" style={{ width: '40%' }}>
                  <div className="opisrubryki">Województwo</div>
                </td>
                <td className="wypelniane" style={{ width: '40%' }}>
                  <div className="opisrubryki">Powiat</div>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="normalna">
            <tbody>
              <tr>
                <td className="wypelniane" style={{ width: '35%' }}>
                  <div className="opisrubryki">Gmina</div>
                </td>
                <td className="wypelniane">
                  <div className="opisrubryki">Ulica</div>
                </td>
                <td className="wypelniane" style={{ width: '10%' }}>
                  <div className="opisrubryki">Nr domu</div>
                </td>
                <td className="wypelniane" style={{ width: '10%' }}>
                  <div className="opisrubryki">Nr lokalu</div>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="normalna">
            <tbody>
              <tr>
                <td className="wypelniane">
                  <div className="opisrubryki">Miejscowość</div>
                </td>
                <td className="wypelniane">
                  <div className="opisrubryki">Kod pocztowy</div>
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
              <div className="opisrubryki">20. Przedmiot opodatkowania:</div>
            </td>
          </tr>
          <tr>
            <td className="wypelniane">
              <div className="opisrubryki">21. Miejsce położenia rzeczy lub miejsce wykonywania prawa majątkowego:</div>
            </td>
          </tr>
          <tr>
            <td className="wypelniane">
              <div className="opisrubryki">22. Miejsce dokonania czynności cywilnoprawnej:</div>
            </td>
          </tr>
          <tr>
            <td className="wypelniane" style={{ width: '50%' }}>
              <div className="opisrubryki">23. Zwięzłe określenie treści i przedmiotu czynności cywilnoprawnej</div>
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
              <div className="kwota">zł</div>
            </td>
            <td className="niewypelnianeopisy" style={{ width: '12%' }}>
              <h1>
                <div >1%</div>
              </h1>
            </td>
            <td className="wypelniane" style={{ width: '12%' }}>
              <div className="opisrubryki">25.</div>
              <div className="kwota">zł</div>
            </td>
          </tr>
          <tr>
            <td className="wypelniane" style={{ width: '12%' }}>
              <div className="opisrubryki">26.</div>
              <div className="kwota">zł</div>
            </td>
            <td className="niewypelnianeopisy" style={{ width: '12%' }}>
              <h1>
                <div>2%</div>
              </h1>
            </td>
            <td className="wypelniane" style={{ width: '12%' }}>
              <div className="opisrubryki">27.</div>
              <div className="kwota">zł</div>
            </td>
          </tr>

          {/* Continue with similar rows and logic */}
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
              <div className="kwota">0 zł</div>
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
        <div className="opisrubryki">54. Województwo</div>
      </td>
      <td className="wypelniane" style={{ width: '40%' }}>
        <div className="opisrubryki">55. Powiat</div>
      </td>
    </tr>
  </tbody>
</table>
<table className="normalna">
  <tbody>
    <tr>
      <td className="wypelniane" style={{ width: '20%' }}>
        <div className="opisrubryki">56. Gmina</div>
      </td>
      <td className="wypelniane" style={{ width: '50%' }}>
        <div className="opisrubryki">57. Ulica</div>
      </td>
      <td className="wypelniane" style={{ width: '15%' }}>
        <div className="opisrubryki">58. Nr domu</div>
      </td>
      <td className="wypelniane" style={{ width: '15%' }}>
        <div className="opisrubryki">59. Nr lokalu</div>
      </td>
    </tr>
  </tbody>
</table>
<table className="normalna">
  <tbody>
    <tr>
      <td className="wypelniane" style={{ width: '70%' }}>
        <div className="opisrubryki">60. Miejscowość</div>
      </td>
      <td className="wypelniane" style={{ width: '30%' }}>
        <div className="opisrubryki">61. Kod pocztowy</div>
      </td>
    </tr>
  </tbody>
</table>

<h2 className="tytul-sekcja-blok">H. INFORMACJA O ZAŁĄCZNIKACH</h2>
<table className="normalna">
  <tbody>
    <tr>
      <td className="wypelniane" style={{ width: '30%' }}>
        <div className="opisrubryki">62. Liczba dołączonych załączników PCC-3/A</div>
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
  );
};