import React, { useState } from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { TbPointFilled } from "react-icons/tb";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDialog = ({ isOpen, onClose}: CustomDialogProps) => {
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      scroll="paper"
      maxWidth="md"
      PaperProps={{
        style: {
          backgroundColor: '#1D2432',
          boxShadow: 'none',
          color:'#E5EAF2'
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Work Experience
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography gutterBottom>
           <span className="font-bold">Jr. Web Developer | YB Capital Investment</span>
        </Typography>

        <Typography className="mt-5" gutterBottom>
          <ul>
            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Diseño, desarrollo y mantenimiento de aplicaciones web multiplataforma.</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Escritura de código limpio, reusable, testable y eficiente.</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Implementación de funcionalidades y módulos según las especificaciones.</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Administración de servicios en AWS para garantizar la disponibilidad y seguridad de las aplicaciones.</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Aplicación de mejores prácticas de UI/UX y SEO para una experiencia de usuario óptima.</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Diseño de experiencias digitales útiles y elegantes en las plataformas web y móviles. </span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Fomentar la colaboración y la coherencia entre los equipos al trabajo en estrecha colaboración con gerentes de producto, diseñadores e ingenieros.</span>
              </div>
            </li>
          </ul>

          
        </Typography>

      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Salir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
