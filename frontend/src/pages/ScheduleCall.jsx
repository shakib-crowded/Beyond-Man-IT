import React, { createContext, useState } from "react";
import Hero from "../components/schedule-call/Hero";
import BookingCallInfo from "../components/schedule-call/BookingCallInfo";
import CallType from "../components/schedule-call/CallType";
import DateAndTime from "../components/schedule-call/DateAndTime";
import YourInformation from "../components/schedule-call/YourInformation";

const API_BASE_URL =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000";

export const ScheduleCallContext = createContext();

const ScheduleCall = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCallType, setSelectedCallType] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const callTypes = [
    {
      id: "consultation",
      title: "Free Consultation",
      duration: "30 minutes",
      description: "Discuss your project requirements and get expert advice",
      icon: "💡",
    },
    {
      id: "demo",
      title: "Product Demo",
      duration: "45 minutes",
      description: "See our solutions in action with a live demonstration",
      icon: "🖥️",
    },
    {
      id: "technical",
      title: "Technical Discussion",
      duration: "60 minutes",
      description: "Deep dive into technical architecture and implementation",
      icon: "⚙️",
    },
    {
      id: "strategy",
      title: "Strategy Planning",
      duration: "60 minutes",
      description: "Plan your digital transformation journey with our experts",
      icon: "📊",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const generateCalendarDays = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const isDateAvailable = (day) => {
    if (!day) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDateObj = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    return selectedDateObj >= today;
  };

  const handleDateSelect = (day) => {
    if (isDateAvailable(day)) {
      setSelectedDate(day);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const monthName = currentMonth.toLocaleString("default", { month: "long" });

    const call = {
      callType: selectedCallType,
      date: `${monthName} ${selectedDate}, ${currentMonth.getFullYear()}`,
      time: selectedTime,
      userInfo: formData,
    };

    const response = await fetch(`${API_BASE_URL}/schedule-call`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(call),
    });

    setShowConfirmation(true);
  };

  const handleValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // correct email regex
    const mobileRegex = /^[0-9]{10}$/; // simple 10-digit phone

    if (!formData.name.trim()) return false;

    if (!formData.email.trim() || !emailRegex.test(formData.email))
      return false;

    if (!formData.phone.trim() || !mobileRegex.test(formData.phone))
      return false;

    return true;
  };

  const canProceedToStep2 = selectedCallType !== null;
  const canProceedToStep3 = selectedDate !== null && selectedTime !== null;
  const canSubmit = handleValidation();

  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const calendarDays = generateCalendarDays();

  if (showConfirmation) {
    const callTypeDetails = callTypes.find((ct) => ct.id === selectedCallType);
    const monthNameFull = currentMonth.toLocaleString("default", {
      month: "long",
    });

    return (
      <ScheduleCallContext.Provider
        value={{
          currentStep,
          callTypeDetails,
          monthNameFull,
          currentMonth,
          selectedTime,
          selectedDate,
          formData,
        }}
      >
        <BookingCallInfo />
      </ScheduleCallContext.Provider>
    );
  }

  return (
    <ScheduleCallContext.Provider
      value={{
        currentStep,
        timeSlots,
        callTypes,
        selectedCallType,
        canProceedToStep2,
        canProceedToStep3,
        calendarDays,
        monthName,
        selectedDate,
        selectedTime,
        formData,
        currentMonth,
        canSubmit,
        handleInputChange,
        handleSubmit,
        setSelectedTime,
        isDateAvailable,
        setCurrentStep,
        setSelectedCallType,
        handleDateSelect,
        handlePrevMonth,
        handleNextMonth,
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Hero />
        <div className="max-w-7xl mx-auto px-6 py-20">
          <CallType />

          <DateAndTime />

          <YourInformation />
        </div>
      </div>
    </ScheduleCallContext.Provider>
  );
};

export default ScheduleCall;
