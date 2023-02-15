import { createContext, useState, useEffect, useContext } from "react";
import { Socket } from "socket.io-client";
import openSocket from "socket.io-client";

interface SocketContextData {
  socket: Socket;
}

export const SocketContext = createContext<SocketContextData>({} as SocketContextData);

const io = openSocket("127.0.0.1:3001");

type SocketProviderProps = {
  children: any;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  return (
    <SocketContext.Provider
      value={{
        socket: io,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
