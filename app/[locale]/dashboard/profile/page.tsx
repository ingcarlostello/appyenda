"use client";

// @Shadcn
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// @next-intl
import { useTranslations } from "next-intl";

// @View Models
import ProfileViewModel from "./ProfileViewModel";

const Profile = () => {
	const { form, handleProfileUpdate } = ProfileViewModel();
	const t = useTranslations("ProfilePage");

	return (
		<div className="min-h-screen grid content-center">
			{" "}
			<Form {...form}>
				<div className="flex justify-center items-center">
					<div className="bg-white md:w-3/6 lg:w-3/6 xl:w-2/4 p-8 flex flex-col gap-10">
						<div className="flex  items-center mb-4 gap-8 ">
							<Avatar className="w-16 h-16 md:w-20 md:h-20 lg:w-36 lg:h-36  rounded-full object-cover shadow-2xl ">
								<AvatarImage src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=900&t=st=1711854839~exp=1711855439~hmac=a480be31238e5c5ae178b3e805aa820830e9a3242ba8cdac193e4dd739b1db3c" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div>
								<h3 className="text-md text-black font-semibold">
									Emmanuel Garavito
								</h3>
								<p className="text-slate-500 ">Floridablanca, COL</p>
							</div>
						</div>
						<form onSubmit={form.handleSubmit(handleProfileUpdate)}>
							<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-16 ">
								<FormField
									control={form.control}
									name="name"
									disabled={true}
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("NAME")}</FormLabel>
											<FormControl>
												<Input
													className="text-center"
													placeholder="Emmanuel Garavito"
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="username"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("USER_NAME")}</FormLabel>
											<FormControl>
												<Input
													disabled={true}
													className="text-center"
													placeholder="emmanuel123"
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="usertype"
									disabled={true}
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("USER_TYPE")}</FormLabel>
											<FormControl>
												<Input
													className="text-center"
													placeholder="Business"
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="email"
									disabled={true}
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("EMAIL")}</FormLabel>
											<FormControl>
												<Input
													className="text-center"
													placeholder="emmanuel123@example.com"
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="phone"
									disabled={true}
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("PHONE_NUMBER")}</FormLabel>
											<FormControl>
												<Input
													className="text-center"
													placeholder="3228950339"
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="location"
									disabled={true}
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("LOCATION")}</FormLabel>
											<FormControl>
												<Input
													className="text-center"
													placeholder="Floridablanca, COL"
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="flex justify-center mt-16  ">
								<Button
									className="w-full p-auto md:w-auto px-12 "
									type="submit"
								>
									{t("EDIT_PROFILE")}
								</Button>
							</div>
						</form>
					</div>
				</div>
			</Form>
		</div>
	);
};

export default Profile;
