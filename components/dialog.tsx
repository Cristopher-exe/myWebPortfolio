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
                <span>Desarrollé y diseñé aplicaciones web centradas en la experiencia del usuario, utilizando Vue.js y Next.js para optimizar rendimiento y escalabilidad.</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span> Implementé y gestioné la arquitectura frontend de múltiples proyectos, asegurando la correcta integración con APIs y la seguridad en el manejo de datos.</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Apliqué mejores prácticas de UI/UX y SEO, logrando interfaces intuitivas y mejorando el posicionamiento en buscadores.</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span>Automatizé procesos de despliegue y mantuve la infraestructura en AWS, utilizando S3, IAM y GitHub Actions para asegurar la alta disponibilidad y eficiencia.</span>
              </div>
            </li>

            <li className="flex">
              <div className="flex items-center">
                <TbPointFilled className="mr-2" />
                <span> Supervisé el mantenimiento, actualizaciones y optimización de las aplicaciones web, asegurando su rendimiento continuo y adaptación a nuevas necesidades del negocio.</span>
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
