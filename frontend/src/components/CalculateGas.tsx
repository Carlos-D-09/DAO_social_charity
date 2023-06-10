import fs from 'fs';


function CalculateGas() {

  const code = fs.readFileSync('demo_ping.opt.wasm');

  const gas = await gearApi.program.calculateGas.initUpload(
    '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d', // source id
    code,
    '0x00', // payload
    0, //value
    true, // allow other panics
  );
  
  console.log(gas.toHuman());

  return (
    <>
    <div>hola</div>
    </>
  );
}

export { CalculateGas };