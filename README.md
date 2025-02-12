# **🚀 React Stepper Component**  

A **fully responsive Stepper (Wizard) component** built with **React, TypeScript, and Tailwind CSS**. This project demonstrates **React fundamentals** such as **state management (`useState`)**, **memoization (`useMemo`)** while ensuring a clean and scalable UI.  

---

## **📌 Features**  
✅ **Dynamic Step Management** – Navigate between steps with `Next` / `Previous` / `Finish`.  
✅ **State Management with `useState`** – Tracks the current step dynamically.  
✅ **Performance Optimization with `useMemo`** – Prevents unnecessary re-renders.  
✅ **Fully Responsive** – Ensures proper step distribution using Tailwind’s `grid`.  
✅ **Scalable Component** – Can be reused in different wizards or multi-step forms.  

---

## **🚀 Getting Started**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/YOUR_USERNAME/react-simple-stepper.git
cd react-stepper
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Run the Development Server**  
```bash
npm run dev
```
Your app will be available at **http://localhost:5173/** 🚀  

---

## **📂 Project Structure**  
```
/src
  ├── /components         # Reusable UI components (Stepper)
  ├── /pages              # Page-level components (Home)
  ├── /layouts            # Structural components (Header, Footer)
  ├── App.tsx             # Main app component
  ├── main.tsx            # Entry point
  ├── index.css           # Global styles
```

---

## **📜 Core React Concepts Used**
### **1️⃣ `useState` – Managing Step State**
✅ **`useState` tracks the current step and updates when the user navigates.**  

📌 **Example: `Stepper.tsx`**
```tsx
const [currentStep, setCurrentStep] = useState(0);

const nextStep = () => {
  if (currentStep < steps.length - 1) {
    setCurrentStep((prev) => prev + 1);
  }
};

const prevStep = () => {
  if (currentStep > 0) {
    setCurrentStep((prev) => prev - 1);
  }
};
```
✅ **Why?** `useState` allows us to track which step the user is currently on and update the UI dynamically.  

---

### **2️⃣ `useMemo` – Optimizing Step Indicators**
✅ **Prevents unnecessary re-renders by memoizing step indicators.**  

📌 **Example: `Stepper.tsx`**
```tsx
const stepIndicators = useMemo(() => {
  return steps.map((step, index) => (
    <div key={index} className="flex flex-col items-center text-center">
      <div className={`w-10 h-10 rounded-full text-white font-bold
        ${index === currentStep ? "bg-blue-500" : "bg-gray-400"}`}
      >
        {index + 1}
      </div>
      <p className="mt-1 text-xs">{step}</p>
    </div>
  ));
}, [steps, currentStep]); // ✅ Only updates when `steps` or `currentStep` change
```
✅ **Why?** Instead of recalculating steps on every render, React **only updates `stepIndicators` when necessary**, improving performance.  

---

### **3️⃣ Responsive UI with Tailwind CSS**
✅ **Ensures even distribution of step indicators across screen sizes.**  
✅ **Uses `grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))]` for dynamic layout.**  

📌 **Example: Stepper Grid Layout**
```tsx
<div className="grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] gap-4 mb-6">
  {stepIndicators}
</div>
```
✅ **Why?** Steps **spread evenly**, ensuring a **perfect layout on all screen sizes** (mobile, tablet, desktop).  

---

### **4️⃣ Conditional Rendering for Navigation Buttons**
✅ **Disables "Previous" on first step, "Next" on last step.**  
✅ **Changes "Next" to "Finish" on the last step.**  

📌 **Example:**
```tsx
<button
  className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
  onClick={prevStep}
  disabled={currentStep === 0}
>
  Previous
</button>

<button
  className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
  onClick={nextStep}
  disabled={currentStep === steps.length - 1}
>
  {currentStep === steps.length - 1 ? "Finish" : "Next"}
</button>
```
✅ **Why?** Ensures a **seamless user experience** by handling edge cases (first and last steps).  

---

## **🖥️ Demo**
📌 **Live Demo:** [Deploy on Vercel](https://vercel.com)  
📌 **Example Usage in a Page (`Home.tsx`):**
```tsx
import Stepper from "../components/Stepper";

const Home = () => {
  const steps = ["Step 1: Info", "Step 2: Details", "Step 3: Confirmation"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Multi-Step Wizard</h1>
      <Stepper steps={steps} />
    </div>
  );
};

export default Home;
```
✅ **Now the stepper is ready to be used anywhere!** 🚀  

---

## **💡 Why This Project?**
This project serves as a **real-world example** of how to **handle multi-step wizards in React**, while demonstrating:  
✔ **State management (`useState`)** to track steps.  
✔ **Performance optimizations (`useMemo`)** for efficiency.  
✔ **Conditional rendering** for navigation buttons.  
✔ **Responsive layouts** using **Tailwind CSS**.  

---

## **🌍 Deployment**  
This project can be deployed easily using **Vercel, Netlify, or GitHub Pages**.  

### **Deploy on Vercel**  
```bash
npm run build
vercel deploy
```

### **Deploy on Netlify**  
```bash
npm run build
netlify deploy
```

---

## **🙌 Contributing**  
Want to improve the project? Feel free to contribute!  

1. **Fork** the repo  
2. **Create a branch:** `git checkout -b my-feature`  
3. **Commit changes:** `git commit -m "Added a new feature"`  
4. **Push the branch:** `git push origin my-feature`  
5. **Open a Pull Request**  

---

## **📜 License**  
This project is **MIT licensed**. Feel free to use and modify it.  

---

## **🍕 Ready to Build?**  
This **React Stepper** is a **powerful, reusable, and optimized component** for multi-step wizards.  

📌 **If you find it useful, ⭐ star the repo and share it!** 🚀🔥  

---

**Made with ❤️ by [Your Name]** 🚀
