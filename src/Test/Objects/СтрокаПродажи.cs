//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Строка продажи.
    /// </summary>
    //  *** Start programmer edit section *** (СтрокаПродажи CustomAttributes)

    //  *** End programmer edit section *** (СтрокаПродажи CustomAttributes)
    [AutoAltered()]
    [Caption("Строка продажи")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СтрокаПродажиE", new string[] {
            "Колво",
            "Товар as \'Товар\'",
            "Товар.Название as \'Название\'"}, Hidden=new string[] {
            "Товар.Название"})]
    [MasterViewDefineAttribute("СтрокаПродажиE", "Товар", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Название")]
    public class СтрокаПродажи : ICSSoft.STORMNET.DataObject
    {
        
        private int fКолво;
        
        private string fЖБС;
        
        private IIS.Test.Товар fТовар;
        
        private IIS.Test.Продажа fПродажа;
        
        //  *** Start programmer edit section *** (СтрокаПродажи CustomMembers)

        //  *** End programmer edit section *** (СтрокаПродажи CustomMembers)

        
        /// <summary>
        /// Колво.
        /// </summary>
        //  *** Start programmer edit section *** (СтрокаПродажи.Колво CustomAttributes)

        //  *** End programmer edit section *** (СтрокаПродажи.Колво CustomAttributes)
        public virtual int Колво
        {
            get
            {
                //  *** Start programmer edit section *** (СтрокаПродажи.Колво Get start)

                //  *** End programmer edit section *** (СтрокаПродажи.Колво Get start)
                int result = this.fКолво;
                //  *** Start programmer edit section *** (СтрокаПродажи.Колво Get end)

                //  *** End programmer edit section *** (СтрокаПродажи.Колво Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (СтрокаПродажи.Колво Set start)

                //  *** End programmer edit section *** (СтрокаПродажи.Колво Set start)
                this.fКолво = value;
                //  *** Start programmer edit section *** (СтрокаПродажи.Колво Set end)

                //  *** End programmer edit section *** (СтрокаПродажи.Колво Set end)
            }
        }
        
        /// <summary>
        /// ЖБС.
        /// </summary>
        //  *** Start programmer edit section *** (СтрокаПродажи.ЖБС CustomAttributes)

        //  *** End programmer edit section *** (СтрокаПродажи.ЖБС CustomAttributes)
        [StrLen(255)]
        public virtual string ЖБС
        {
            get
            {
                //  *** Start programmer edit section *** (СтрокаПродажи.ЖБС Get start)

                //  *** End programmer edit section *** (СтрокаПродажи.ЖБС Get start)
                string result = this.fЖБС;
                //  *** Start programmer edit section *** (СтрокаПродажи.ЖБС Get end)

                //  *** End programmer edit section *** (СтрокаПродажи.ЖБС Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (СтрокаПродажи.ЖБС Set start)

                //  *** End programmer edit section *** (СтрокаПродажи.ЖБС Set start)
                this.fЖБС = value;
                //  *** Start programmer edit section *** (СтрокаПродажи.ЖБС Set end)

                //  *** End programmer edit section *** (СтрокаПродажи.ЖБС Set end)
            }
        }
        
        /// <summary>
        /// Строка продажи.
        /// </summary>
        //  *** Start programmer edit section *** (СтрокаПродажи.Товар CustomAttributes)

        //  *** End programmer edit section *** (СтрокаПродажи.Товар CustomAttributes)
        [NotNull()]
        public virtual IIS.Test.Товар Товар
        {
            get
            {
                //  *** Start programmer edit section *** (СтрокаПродажи.Товар Get start)

                //  *** End programmer edit section *** (СтрокаПродажи.Товар Get start)
                IIS.Test.Товар result = this.fТовар;
                //  *** Start programmer edit section *** (СтрокаПродажи.Товар Get end)

                //  *** End programmer edit section *** (СтрокаПродажи.Товар Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (СтрокаПродажи.Товар Set start)

                //  *** End programmer edit section *** (СтрокаПродажи.Товар Set start)
                this.fТовар = value;
                //  *** Start programmer edit section *** (СтрокаПродажи.Товар Set end)

                //  *** End programmer edit section *** (СтрокаПродажи.Товар Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Test.Продажа.
        /// </summary>
        //  *** Start programmer edit section *** (СтрокаПродажи.Продажа CustomAttributes)

        //  *** End programmer edit section *** (СтрокаПродажи.Продажа CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.Test.Продажа Продажа
        {
            get
            {
                //  *** Start programmer edit section *** (СтрокаПродажи.Продажа Get start)

                //  *** End programmer edit section *** (СтрокаПродажи.Продажа Get start)
                IIS.Test.Продажа result = this.fПродажа;
                //  *** Start programmer edit section *** (СтрокаПродажи.Продажа Get end)

                //  *** End programmer edit section *** (СтрокаПродажи.Продажа Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (СтрокаПродажи.Продажа Set start)

                //  *** End programmer edit section *** (СтрокаПродажи.Продажа Set start)
                this.fПродажа = value;
                //  *** Start programmer edit section *** (СтрокаПродажи.Продажа Set end)

                //  *** End programmer edit section *** (СтрокаПродажи.Продажа Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СтрокаПродажиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СтрокаПродажиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СтрокаПродажиE", typeof(IIS.Test.СтрокаПродажи));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of СтрокаПродажи.
    /// </summary>
    //  *** Start programmer edit section *** (DetailArrayDetailArrayOfСтрокаПродажи CustomAttributes)

    //  *** End programmer edit section *** (DetailArrayDetailArrayOfСтрокаПродажи CustomAttributes)
    public class DetailArrayOfСтрокаПродажи : ICSSoft.STORMNET.DetailArray
    {
        
        //  *** Start programmer edit section *** (IIS.Test.DetailArrayOfСтрокаПродажи members)

        //  *** End programmer edit section *** (IIS.Test.DetailArrayOfСтрокаПродажи members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type СтрокаПродажи by index.
        /// </summary>
        /// <summary>
        /// Adds object with type СтрокаПродажи.
        /// </summary>
        public DetailArrayOfСтрокаПродажи(IIS.Test.Продажа fПродажа) : 
                base(typeof(СтрокаПродажи), ((ICSSoft.STORMNET.DataObject)(fПродажа)))
        {
        }
        
        public IIS.Test.СтрокаПродажи this[int index]
        {
            get
            {
                return ((IIS.Test.СтрокаПродажи)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Test.СтрокаПродажи dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
