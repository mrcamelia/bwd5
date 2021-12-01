import logo from './logo.svg';
import './App.css';

function App() {
  const content1 =
  [{no:'1',tgl:'1 januari 2021',ket:'Saldo Awal',debit:'21000000',kredit:'0',saldo:'0'},
  {no:'2',tgl:'1 januari 2021',ket:'Gaji Karyawan',debit:'0',kredit:'3000000'},
  {no:'3',tgl:'1 januari 2021',ket:'Service AC',debit:'0',kredit:'500000'},
  {no:'4',tgl:'1 januari 2021',ket:'Pembelian ATK',debit:'0',kredit:'200000'},
  {no:'5',tgl:'2 januari 2021',ket:'Pembayaran Order #3D20210001',debit:'500000',kredit:'0'},
  {no:'6',tgl:'2 januari 2021',ket:'Pembayaran Order #3D20210002',debit:'500000',kredit:'0'},
  {no:'7',tgl:'5 januari 2021',ket:'Pembayaran Order #3D20210005',debit:'200000',kredit:'0'},
  {no:'8',tgl:'9 januari 2021',ket:'Pembayaran Order #3D20210021',debit:'100000',kredit:'0'},
  {no:'9',tgl:'14 januari 2021',ket:'Pembelian Unit PC',debit:'0',kredit:'5970000'},
  {no:'10',tgl:'14 januari 2021',ket:'Pembayaran Order #3D2021007',debit:'350000',kredit:'0'},
  {no:'11',tgl:'18 januari 2021',ket:'Pembayaran Order #3D2021011',debit:'275000',kredit:'0'},
  {no:'12',tgl:'18 januari 2021',ket:'Pembayaran Order #3D2021012',debit:'275000',kredit:'0'},
  {no:'13',tgl:'25 januari 2021',ket:'Pembayaran Order #3D2021016',debit:'350000',kredit:'0'},
];

  return (
    <div className="content">
      <header className="laporan">
      <p id="header1">
          Laporan Keuangan CV Berkah Maju
        </p>
        <p id="header2">
          Januari 2021
        </p>
      </header>
      <table className="table1">
        <thead>
          <tr>
            <th id="nomor" rowspan="2">No</th>
            <th id="tanggal" rowspan="2">Tanggal</th>
            <th id="ket" rowspan="2">Ket/Uraian</th>
            <th id="jumlah" colspan="2">Jumlah</th>
            <th id="saldo" rowspan="2">Saldo</th>
          </tr>
          <tr>
            <th id="debit">Debit</th>
            <th id="kredit">Kredit</th>
          </tr>
        </thead>
        <tbody>{content1.map((content1)=> (
          <tr>
            <th>{content1.no}</th>
            <td>{content1.tgl}</td>
            <td>{content1.ket}</td>
            <td>Rp{content1.debit}</td>
            <td>Rp{content1.kredit}</td>
            <td>Rp{content1.saldo+content1.debit-content1.kredit}</td>
          </tr>
          ))}
        </tbody>
        <th colspan="3">TOTAL</th>
        <td>Rp{content1.debit}</td>
        <td>Rp{content1.kredit}</td>
        <td>Rp{content1.kredit}</td>
      </table>
    </div>
  );
}

export default App;
