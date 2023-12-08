import React , { useState } from 'react';
import { AiTwotoneCopy } from "react-icons/ai";
import { AiTwotoneSave } from "react-icons/ai";
import { SlRefresh } from "react-icons/sl";
import toast, { Toaster } from "react-hot-toast";
import { generateRandomPassword , isValidUrl } from "../components/utils";
import { addPassword } from "../components/db";
import TableComponent from "../components/TableComponent";

const HomePage = () => {

  const [password , setPassword] = useState("");
  const [website , setWebsite] = useState("");
  const [length, setLength] = useState(8);

  const generatePassword = () => {
    if (length > 3 && length < 21) {
      const randomPassword = generateRandomPassword(length);
      setPassword(randomPassword);
    } else {
      toast("Password should be minimum 4 & maximum 20 characters");
    }
  };

  const copyPassword = () => {
    if(password){
      navigator.clipboard.writeText(password);
      toast("Password copied to clipboard.");
    }
  }

  const savePassword = () => {
    if(password && website && isValidUrl(website)){
      console.log("Website:", website, "Password:", password);
      addPassword(website, password);
      toast("Password saved successfully.");
    } else{
      toast("Please enter valid URL and/or Password.");
    }
  }

  return(
    <div>
    <Toaster
        toastOptions={{
          className: "bg-cyan-800 text-cyan-100",
          duration: 1000,
          style: {
            background: "#083344",
            color: "#cffafe",
          },
        }}
      />
      <div>
        <h1 className="text-4xl text-center font-medium">Password Generator</h1>
        <input
          className="w-40 rounded-md border-2 border-sky-800 mr-2 px-3.5 py-4 text-slate-900 shadow-sm"
          placeholder="Length:"
          type="number"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
        <button onClick={generatePassword} className="bg-sky-600 text-cyan-100 px-4 py-5 rounded-lg hover:bg-lime-600 shadow-lg shadow-sky-500/50 inline-flex mt-4">
          Generate Password
          <span className="ml-4">
            <SlRefresh size={24} />
          </span>
        </button>
        <div className="block flex items-center">
          <input value={password} className="w-3/4 rounded-md border-2 border-sky-800 px-3.5 py-4 text-md mt-4" readOnly placeholder="Password:"/>
          <button onClick={copyPassword} className="ml-4 my-2" title="Copy Password Button">
            <AiTwotoneCopy size={40} className="text-blue-600" />
          </button>
        </div>
      </div>
      <div className="block flex items-center">
        <input value={website} className="w-3/4 rounded-md border-2 border-sky-800 px-3.5 py-4 text-md mt-4" placeholder="Website:" onChange={(event) => setWebsite(event.target.value)}/>
        <button className="ml-4 my-2" title="Save Website Button">
          <AiTwotoneSave onClick={savePassword} size={40} className="text-blue-600" />
        </button>
      </div>
      <TableComponent />
    </div>
  )
}

export default HomePage;
