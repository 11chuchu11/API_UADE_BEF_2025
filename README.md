# API UADE BEF 2025 - Sistema de Gestión de Consultorio Médico

Sistema web completo para la gestión de un consultorio médico, desarrollado para el Dr. Daniel Diaz, especialista en Pediatría Infantil y Medicina Familiar. La aplicación permite a los pacientes reservar citas médicas y al doctor administrar su consultorio de manera eficiente.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Arquitectura](#-arquitectura)
- [Componentes Principales](#-componentes-principales)
- [Hooks Personalizados](#-hooks-personalizados)
- [API y Endpoints](#-api-y-endpoints)
- [Autenticación](#-autenticación)
- [Guía de Uso](#-guía-de-uso)
- [Desarrollo](#-desarrollo)

## ✨ Características

### Para Pacientes (Vista Pública)
- **Página de Inicio**: Información sobre el doctor, especialidades y servicios
- **Reserva de Citas**: Sistema completo de reserva con:
  - Selección de fecha y hora
  - Formulario de datos personales
  - Selección de obra social/seguro médico
  - Validación de campos
- **Información del Doctor**: Sección "Sobre mí" con detalles profesionales
- **Servicios**: Listado de servicios médicos ofrecidos
- **Contacto**: Información de contacto del consultorio
- **Estadísticas**: Muestra de logros y experiencia del doctor

### Para el Doctor (Panel de Administración)
- **Dashboard de Citas**: 
  - Visualización de todas las citas programadas
  - Confirmación y cancelación de citas
  - Estados: "requested" (solicitada) y "confirmed" (confirmada)
- **Gestión de Obras Sociales**:
  - Agregar nuevas obras sociales
  - Editar información de obras sociales existentes
  - Activar/desactivar obras sociales
  - Eliminar obras sociales
- **Autenticación**: Sistema de login seguro con tokens

## 🛠 Stack Tecnológico

### Frontend
- **React 19.1.1**: Biblioteca principal para la interfaz de usuario
- **React Router 7.8.1**: Enrutamiento y navegación
- **TypeScript 5.8.3**: Tipado estático
- **Vite 7.1.0**: Build tool y dev server
- **Tailwind CSS 4.1.12**: Framework de estilos utility-first

### UI Components
- **Radix UI**: Componentes accesibles (Dialog, Label, Select, Slot)
- **Lucide React**: Iconos
- **React Icons**: Biblioteca adicional de iconos
- **React Day Picker**: Selector de fechas
- **date-fns**: Utilidades para manejo de fechas

### Estado y Datos
- **Axios 1.13.2**: Cliente HTTP para peticiones a la API
- **Context API**: Gestión de estado global

### Utilidades
- **class-variance-authority**: Variantes de componentes
- **clsx & tailwind-merge**: Utilidades para clases CSS
- **isbot**: Detección de bots

### Desarrollo
- **ESLint**: Linter para código JavaScript/TypeScript
- **TypeScript ESLint**: Reglas específicas de TypeScript
- **PostCSS**: Procesamiento de CSS

## 📁 Estructura del Proyecto

```
API_UADE_BEF_2025/
├── build/                    # Archivos compilados
│   ├── client/              # Build del cliente
│   └── server/              # Build del servidor
├── src/
│   ├── assets/              # Imágenes y recursos estáticos
│   ├── components/          # Componentes React
│   │   ├── Admin/          # Componentes del panel de administración
│   │   │   ├── Dashboard/  # Dashboard de citas
│   │   │   └── Insurances/ # Gestión de obras sociales
│   │   ├── Home/           # Componentes de la página pública
│   │   │   ├── AboutMe/    # Sección sobre el doctor
│   │   │   ├── Contact/    # Sección de contacto
│   │   │   ├── forms/     # Formularios (Login, Schedule)
│   │   │   ├── Hero/       # Hero section principal
│   │   │   └── Services/   # Sección de servicios
│   │   ├── layout/         # Componentes de layout (Header, Footer, etc.)
│   │   └── ui/             # Componentes UI reutilizables
│   ├── context/            # Context providers
│   │   └── DataProvider/   # Provider de datos globales
│   ├── Hooks/              # Custom hooks
│   │   ├── requests/       # Hooks para peticiones API
│   │   ├── useData/        # Hook para acceder al contexto
│   │   ├── useForm/        # Hook para manejo de formularios
│   │   └── useScheduleForm/ # Hook específico para formulario de citas
│   ├── lib/                # Utilidades y helpers
│   │   ├── utils.ts        # Funciones utilitarias
│   │   ├── validators.ts   # Validadores de formularios
│   │   └── time.ts         # Utilidades de tiempo
│   ├── pages/              # Páginas/rutas
│   │   ├── _index.tsx      # Página de inicio
│   │   └── admin/          # Página de administración
│   ├── styles/             # Estilos globales
│   ├── utils/              # Utilidades adicionales
│   │   ├── constants.ts    # Constantes de la aplicación
│   │   ├── cookies.ts      # Manejo de cookies
│   │   └── request.ts      # Configuración de Axios
│   ├── root.tsx            # Componente raíz
│   └── routes.ts           # Configuración de rutas
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos

1. **Clonar el repositorio** (si aplica)
```bash
git clone <repository-url>
cd API_UADE_BEF_2025
```

2. **Instalar dependencias**
```bash
npm install
```

## ⚙️ Configuración

### Variables de Entorno
La aplicación se conecta a una API backend. Por defecto, la URL base está configurada en:
- `src/utils/request.ts`: `http://localhost:3000/api`

Para cambiar la URL de la API, modifica el archivo `src/utils/request.ts`:

```typescript
const requestClient = axios.create({
    baseURL: 'http://tu-api-url/api', // Cambiar aquí
    timeout: 10000,
    // ...
})
```

### Configuración de Rutas
Las rutas se configuran automáticamente desde el directorio `pages/` usando React Router file-based routing.

### Alias de Importación
El proyecto utiliza alias para imports más limpios:
- `@/` → `src/`
- `@components/` → `src/components/`
- `@hooks/` → `src/hooks/`
- `@utils/` → `src/utils/`

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo con hot reload

# Build
npm run build        # Compila el proyecto para producción

# Preview
npm run preview      # Previsualiza el build de producción

# Linting
npm run lint         # Ejecuta el linter
npm run lint:fix     # Ejecuta el linter y corrige errores automáticamente
```

## 🏗 Arquitectura

### Patrón de Diseño
- **Component-Based Architecture**: Componentes React reutilizables
- **Custom Hooks**: Lógica reutilizable encapsulada en hooks
- **Context API**: Estado global compartido
- **File-Based Routing**: Rutas basadas en estructura de archivos

### Flujo de Datos
1. **Componentes** → Consumen datos del Context o hacen peticiones directas
2. **Custom Hooks** → Encapsulan lógica de negocio y peticiones API
3. **Context Provider** → Mantiene estado global de la aplicación
4. **Axios Client** → Maneja todas las peticiones HTTP con interceptores

### Autenticación
- Tokens almacenados en cookies
- Interceptor de Axios añade automáticamente el token a las peticiones
- Redirección automática si el token expira (401)

## 🧩 Componentes Principales

### Componentes Públicos (Home)

#### `HomeView`
Componente principal que renderiza todas las secciones de la página pública:
- Hero section
- Barra de estadísticas
- Sección "Sobre mí"
- Servicios
- Contacto

#### `ScheduleForm`
Formulario completo para reservar citas:
- Campos personales (nombre, teléfono, email)
- Selector de obra social
- Calendario para selección de fecha
- Selector de horario disponible

#### `LoginDialog`
Modal de login para acceso al panel de administración.

### Componentes de Administración

#### `Dashboard`
Muestra todas las citas programadas con opciones para:
- Confirmar citas
- Cancelar citas
- Ver estado de cada cita

#### `InsurancesSection`
Gestión completa de obras sociales:
- Listado de obras sociales
- Agregar nuevas
- Editar existentes
- Activar/desactivar
- Eliminar

### Componentes UI Reutilizables
- `Button`: Botones con variantes (brand, brandOutline, destructive, etc.)
- `Card`: Tarjetas contenedoras
- `Dialog`: Modales
- `Input`: Campos de entrada
- `Select`: Selectores desplegables
- `Calendar`: Calendario para selección de fechas
- `Spinner`: Indicador de carga
- `Badge`: Etiquetas de estado

## 🎣 Hooks Personalizados

### Hooks de Peticiones API

#### `useLogin`
Maneja el proceso de autenticación:
- Valida credenciales
- Almacena token en cookie
- Redirige al panel de administración

#### `useGenerateAppointment`
Crea una nueva cita médica:
- Valida datos del formulario
- Envía petición POST a la API
- Maneja estados de carga y errores

#### `useGetAllAppointments`
Obtiene todas las citas del doctor:
- Carga inicial de citas
- Actualiza el contexto global

#### `useUpdateAppointmentState`
Actualiza el estado de una cita (confirmar/cancelar):
- Cambia estado de "requested" a "confirmed"
- O cancela una cita

#### `useAddInsurance`
Agrega una nueva obra social:
- Crea obra social en la API
- Actualiza lista local

#### `useUpdateInsurance`
Actualiza información de una obra social existente:
- Modifica nombre y descripción
- Actualiza en la API y localmente

#### `useUpdateActiveInsurance`
Activa o desactiva una obra social:
- Cambia estado `active` de la obra social
- Endpoints separados para activar/desactivar

#### `useDeleteInsurance`
Elimina una obra social:
- Remueve de la API
- Actualiza lista local

### Otros Hooks

#### `useData`
Hook para acceder al contexto global de datos:
```typescript
const { data, updateData } = useData()
```

#### `useScheduleForm`
Hook completo para el formulario de reserva:
- Manejo de estado del formulario
- Validación de campos
- Cálculo de horarios disponibles
- Filtrado de obras sociales activas
- Envío del formulario

#### `useForm`
Hook genérico para manejo de formularios:
- Validación
- Manejo de errores
- Estados de envío

#### `useDebouncer`
Hook para debounce de valores (útil para búsquedas)

#### `useScrollToHash`
Hook para scroll automático a secciones con hash en la URL

## 🌐 API y Endpoints

### Base URL
```
http://localhost:3000/api
```

### Endpoints Disponibles

#### Autenticación
```
POST /auth
Body: { user: string, password: string }
Response: { token: string }
```

#### Citas (Appointments)
```
GET  /appointment/all/next
Obtiene todas las citas próximas

POST /appointment
Crea una nueva cita
Body: {
  patient: string,
  phone: string,
  email: string,
  insurance: { id: number, name: string, ... },
  date: string,
  time: string
}

POST /appointment/:id/confirm
Confirma una cita

POST /appointment/:id/cancel
Cancela una cita
```

#### Obras Sociales (Insurances)
```
GET  /insurance/all
Obtiene todas las obras sociales

POST /insurance
Crea una nueva obra social
Body: { name: string, description?: string }

PUT  /insurance/:id
Actualiza una obra social
Body: { name: string, description?: string }

POST /insurance/:id/activate
Activa una obra social

POST /insurance/:id/deactivate
Desactiva una obra social

DELETE /insurance/:id
Elimina una obra social
```

### Configuración de Endpoints
Los endpoints están definidos en `src/utils/constants.ts`:

```typescript
export const API_PATHS = {
  APPOINTMENTS: {
    NEXT: '/appointment/all/next',
    CREATE: '/appointment',
    CONFIRM: (id: number) => `/appointment/${id}/confirm`,
    CANCEL: (id: number) => `/appointment/${id}/cancel`,
  },
  INSURANCES: {
    ALL: '/insurance/all',
    CREATE: '/insurance',
    UPDATE: (id: number) => `/insurance/${id}`,
    ACTIVATE: (id: number) => `/insurance/${id}/activate`,
    DEACTIVATE: (id: number) => `/insurance/${id}/deactivate`,
    DELETE: (id: number) => `/insurance/${id}`,
  },
  AUTH: '/auth'
}
```

## 🔐 Autenticación

### Flujo de Autenticación

1. **Login**: El usuario ingresa credenciales en el modal de login
2. **Validación**: Se envía petición POST a `/auth`
3. **Almacenamiento**: Si es exitoso, el token se guarda en cookie (`access_token`)
4. **Interceptores**: Axios añade automáticamente el token a todas las peticiones
5. **Protección**: Las rutas protegidas verifican la existencia del token
6. **Expiración**: Si el token expira (401), se redirige al login

### Cookies
Configuración de cookies en `src/utils/constants.ts`:
- `access_token`: Token de autenticación (expira en 60 minutos)
- `isLogged`: Flag de sesión activa (expira en 60 minutos)

### Credenciales por Defecto
- Usuario: `doctor`
- Contraseña: `12345`

⚠️ **Importante**: Cambiar estas credenciales en producción.

## 📖 Guía de Uso

### Para Pacientes

1. **Acceder a la página**: Navegar a la URL del sitio
2. **Ver información**: Explorar las secciones (Sobre mí, Servicios, etc.)
3. **Reservar cita**:
   - Hacer clic en el botón "Reserva de citas"
   - Completar el formulario con datos personales
   - Seleccionar obra social
   - Elegir fecha disponible en el calendario
   - Seleccionar horario disponible
   - Confirmar la reserva
4. **Contacto**: Usar la sección de contacto para comunicarse

### Para el Doctor (Administrador)

1. **Login**:
   - Hacer clic en "login" en el header
   - Ingresar credenciales
   - Ser redirigido al panel de administración

2. **Gestionar Citas**:
   - Ver todas las citas en el Dashboard
   - Confirmar citas solicitadas
   - Cancelar citas si es necesario
   - Ver estado de cada cita

3. **Gestionar Obras Sociales**:
   - Ver lista de obras sociales
   - Agregar nueva obra social (botón "+")
   - Editar obra social existente (botón "Editar")
   - Activar/desactivar obra social (botón "Activar"/"Desactivar")
   - Eliminar obra social (botón "Borrar")

## 💻 Desarrollo

### Estructura de Componentes
Los componentes siguen una estructura modular:
```
ComponentName/
├── index.tsx        # Componente principal
├── SubComponent/    # Subcomponentes (si aplica)
└── types/          # Tipos TypeScript (si aplica)
```

### Convenciones de Código
- **TypeScript**: Tipado estricto en todos los archivos
- **Nombres**: PascalCase para componentes, camelCase para funciones
- **Imports**: Usar alias (`@/`, `@components/`, etc.)
- **Estilos**: Tailwind CSS utility classes
- **Estado**: Context API para estado global, useState para estado local

### Agregar Nuevos Componentes
1. Crear carpeta en `src/components/`
2. Crear `index.tsx` con el componente
3. Exportar el componente
4. Importar donde sea necesario usando alias

### Agregar Nuevos Hooks
1. Crear carpeta en `src/Hooks/`
2. Crear `index.tsx` con el hook
3. Exportar el hook
4. Usar en componentes

### Agregar Nuevas Rutas
1. Crear archivo en `src/pages/`
2. El routing se genera automáticamente basado en la estructura de archivos
3. Ejemplo: `src/pages/about.tsx` → `/about`

### Testing
El proyecto está preparado para agregar tests. Se recomienda:
- Jest para unit tests
- React Testing Library para tests de componentes
- Tests E2E con Playwright o Cypress

## 📝 Notas Adicionales

### Responsive Design
La aplicación está diseñada para ser completamente responsive:
- Mobile-first approach
- Breakpoints de Tailwind CSS
- Componentes adaptativos

### Accesibilidad
- Componentes Radix UI con soporte ARIA
- Navegación por teclado
- Contraste de colores adecuado

### Performance
- Code splitting automático con React Router
- Lazy loading de componentes
- Optimización de imágenes
- Build optimizado con Vite

## 🤝 Contribución

1. Crear una rama para la nueva funcionalidad
2. Realizar cambios y commits descriptivos
3. Ejecutar linter: `npm run lint:fix`
4. Crear Pull Request

## 📄 Licencia

Este proyecto es parte del curso de la Universidad Argentina de la Empresa (UADE).

---

**Desarrollado para**: Dr. Daniel Diaz - Especialista en Pediatría Infantil y Medicina Familiar
